import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/features/productSlice";
import { RootState } from "../../redux/store";
import { Grid, Typography, Breadcrumbs, Box, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import _ from "lodash";
import { addProduct } from "../../redux/features/cartSlice";
import QuantityController from "../../components/QuantityController";
import toast from "react-hot-toast";

const ImageGridStyles = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    height: 500,
  },
}));

const ThumbnailImageStyles = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    height: 120,
  },
}));

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct } = useSelector((state: RootState) => state.products);

  const [quantity, setQuantity] = useState<number>(1);

  const handleIncreaseQuantity = () => setQuantity((preV) => preV + 1);

  const handleDecreaseQuantity = () =>
    quantity === 1 ? "" : setQuantity((preV) => preV - 1);

  const handleAddToCart = () =>
    dispatch(addProduct({ product: { ...selectedProduct, quantity } }));

  useEffect(() => {
    if (id) {
      // @ts-ignore
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    // @ts-ignore
    if (selectedProduct.message) {
      toast("Product Not found");
      navigate("/");
    }
  }, [navigate, selectedProduct]);

  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <ImageGridStyles item md={6} xs={12}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              border: "1px solid black",
              cursor: "pointer",
            }}
            alt={selectedProduct?.title}
            src={selectedProduct?.thumbnail}
          />
        </ImageGridStyles>
        <Grid
          item
          md={6}
          xs={12}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Typography>{_.upperCase(selectedProduct?.category)}</Typography>
            <Typography color="text.primary">
              {_.upperCase(selectedProduct?.title)}
            </Typography>
          </Breadcrumbs>
          <Typography
            sx={{
              fontSize: "200%",
              display: "flex",
              alignItems: "center",
              mt: 2,
            }}
          >
            {selectedProduct?.title} - {selectedProduct?.price}
            <CurrencyRupeeIcon fontSize="large" />
          </Typography>
          <Typography sx={{ mt: 2, color: "#00796b", fontSize: "90%" }}>
            {selectedProduct?.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }} mt={2}>
            <Typography sx={{ mr: 2 }}>Quantity </Typography>
            <QuantityController
              quantity={quantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
            />
          </Box>
          <Grid container spacing={4} sx={{ mt: 1 }}>
            {selectedProduct?.images?.length !== 1 &&
              selectedProduct?.images?.map((image: string) => (
                <ThumbnailImageStyles
                  item
                  xs={12 / selectedProduct?.images?.length}
                  key={image}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                      border: "1px solid #00796b",
                      cursor: "pointer",
                    }}
                    alt={image}
                    src={image}
                  />
                </ThumbnailImageStyles>
              ))}
          </Grid>
          <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
            <Button
              fullWidth
              sx={{
                color: "#000",
                mt: 2,
                borderColor: "black !important",
              }}
              variant="outlined"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
