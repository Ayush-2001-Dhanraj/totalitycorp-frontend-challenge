import { Box, Typography, Grid, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Product } from "../../../redux/features/productSlice";
import { addProduct } from "../../../redux/features/cartSlice";

const StyledDivider = styled(Divider)({
  backgroundColor: "black",
});

const RatingBox = styled(Box)({
  backgroundColor: "#00796b",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: 35,
  right: 0,
  color: "#fff",
});

interface ProductCardInterface {
  product: Product;
}

export default function ProductCard({ product }: ProductCardInterface) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewDetails = () => navigate(`/details/${product.id}`);

  const handleAddTocart = () => {
    dispatch(addProduct({ product: { ...product, quantity: 1 } }));
  };

  return (
    <Grid item xs={12} md={3} key={product.id} sx={{ position: "relative" }}>
      <Box
        component="img"
        p={2}
        sx={{
          height: 280,
          width: "100%",
          boxSizing: "border-box",
          border: "1px solid black",
          cursor: "pointer",
        }}
        alt={product.title}
        src={product?.thumbnail}
        onClick={handleViewDetails}
      />
      <Typography
        sx={{
          fontSize: "120%",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: 45,
          left: 65,
          backgroundColor: "#fff",
        }}
        pr={2}
      >
        {product.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "90%",
            color: "#00796b",
            display: "flex",
            alignItems: "center",
          }}
        >
          Price: {product.price}
          <CurrencyRupeeIcon fontSize="small" />
        </Typography>
        <Box
          sx={{ border: "1px solid #00796b" }}
          borderRadius={8}
          mb={1}
          mt={1}
        >
          <IconButton
            aria-label="delete"
            onClick={handleAddTocart}
            className="animated-button"
          >
            <AddShoppingCartIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <StyledDivider />
      <RatingBox>
        <StarIcon fontSize="small" />
        {product.rating}
      </RatingBox>
    </Grid>
  );
}
