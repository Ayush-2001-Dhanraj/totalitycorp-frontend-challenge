import { Box, Divider, Grid, Typography } from "@mui/material";
import { Product } from "../../redux/features/productSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuantity, removeProduct } from "../../redux/features/cartSlice";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import QuantityController from "../QuantityController";
import { PriceTypography } from "../../pages/CheckoutPage";

interface PreViewProductInterface {
  product: Product;
  quantity: number;
}

export default function PreviewProduct({
  product,
  quantity,
}: PreViewProductInterface) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const increaseQuantity = (product: Product) => {
    dispatch(
      updateQuantity({
        productId: product?.id,
        newQuantity: quantity + 1,
      })
    );
  };

  const decreaseQuantity = (product: Product) => {
    if (quantity > 1) {
      dispatch(
        updateQuantity({
          productId: product?.id,
          newQuantity: quantity - 1,
        })
      );
    } else {
      dispatch(
        removeProduct({
          productId: product?.id,
        })
      );
    }
  };

  const handleThumbnailClick = (product: Product) =>
    navigate(`/details/${product?.id}`);

  return (
    <Grid
      container
      mb={1}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      key={product?.id}
    >
      <Grid item md={2} xs={6}>
        <Box
          component="img"
          p={1}
          sx={{
            height: 100,
            width: 100,
            boxSizing: "border-box",
            border: "1px solid black",
          }}
          alt={product?.title}
          onClick={() => handleThumbnailClick(product)}
          src={product?.thumbnail}
        />
      </Grid>
      <Grid
        item
        md={5}
        xs={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <QuantityController
          quantity={quantity}
          handleIncreaseQuantity={() => increaseQuantity(product)}
          handleDecreaseQuantity={() => decreaseQuantity(product)}
        />
      </Grid>
      <Grid item md={5} xs={12}>
        <Box>
          <Typography align="right">{product?.title}</Typography>
          <PriceTypography
            sx={{
              fontSize: "75%",
            }}
          >
            {quantity} X {product?.price}
            <CurrencyRupeeIcon fontSize="small" />
          </PriceTypography>
          <Divider />
          <PriceTypography
            sx={{
              fontSize: "90%",
            }}
          >
            {quantity * product?.price}
            <CurrencyRupeeIcon fontSize="small" />
          </PriceTypography>
        </Box>
      </Grid>
    </Grid>
  );
}
