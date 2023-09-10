import { Divider, Typography } from "@mui/material";
import { PriceTypography } from "..";
import PreviewProduct from "../../../components/PreviewProduct";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CartProductInterface } from "../../../redux/features/cartSlice";

interface OrderSummaryInterface {
  cart: CartProductInterface[];
  totalAmount: number;
}

export default function OrderSummary({
  cart,
  totalAmount,
}: OrderSummaryInterface) {
  return (
    <>
      <Typography sx={{ mb: 2 }}>ORDER SUMMERY</Typography>
      {cart?.map((product: CartProductInterface) => (
        <PreviewProduct
          product={product}
          quantity={product.quantity}
          key={product?.id}
        />
      ))}
      <Divider sx={{ mt: 4, mb: 1 }} />
      <PriceTypography
        sx={{
          fontSize: "120%",
        }}
      >
        Total: {totalAmount}
        <CurrencyRupeeIcon fontSize="small" />
      </PriceTypography>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Secure Checkout <LockOutlinedIcon fontSize="small" sx={{ ml: 1 }} />
      </Typography>
    </>
  );
}
