import { Box } from "@mui/material";
import { styled } from "@mui/system";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

const SquareBox = styled(Box)({
  width: "30px",
  height: "30px",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

interface QuanityControllerInter {
  handleIncreaseQuantity: () => void;
  quantity: number;
  handleDecreaseQuantity: () => void;
}

export default function QuantityController({
  handleIncreaseQuantity,
  quantity,
  handleDecreaseQuantity,
}: QuanityControllerInter) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SquareBox onClick={handleIncreaseQuantity}>
        <AddOutlinedIcon />
      </SquareBox>
      <SquareBox sx={{ width: "45px" }}>{quantity}</SquareBox>
      <SquareBox onClick={handleDecreaseQuantity}>
        <RemoveOutlinedIcon />
      </SquareBox>
    </Box>
  );
}
