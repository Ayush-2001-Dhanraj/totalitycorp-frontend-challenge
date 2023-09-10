import { Box, Grid, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset } from "../../redux/features/cartSlice";
import SuccessAnimation from "../../components/SuccessAnimation";
import EmptyCartMessage from "./EmptyCartMessage";
import CheckoutSteps from "./CheckoutSteps";
import OrderSummary from "./OrderSummary";

export const MainActionButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#000",
  mt: 2,
  borderColor: "black !important",
  "&:hover": {
    backgroundColor: "#000",
  },
});

export const PriceTypography = styled(Typography)({
  color: "#00796b",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

export default function CheckoutPage() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmont] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleConfirmPurchase = () => setIsSuccess(true);

  useEffect(() => {
    const totalAmount = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotalAmont(totalAmount);
  }, [cart]);

  useEffect(() => {
    if (isSuccess)
      setTimeout(() => {
        setIsSuccess(false);
        dispatch(reset());
        navigate("/");
      }, 2000);
  }, [dispatch, isSuccess, navigate]);

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {cart?.length === 0 ? (
            <EmptyCartMessage />
          ) : (
            <CheckoutSteps handleConfirmPurchase={handleConfirmPurchase} />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <OrderSummary cart={cart} totalAmount={totalAmount} />
        </Grid>
      </Grid>
      {/* success animation */}
      <SuccessAnimation
        isOpen={isSuccess}
        handleClose={() => setIsSuccess(false)}
      />
    </Box>
  );
}
