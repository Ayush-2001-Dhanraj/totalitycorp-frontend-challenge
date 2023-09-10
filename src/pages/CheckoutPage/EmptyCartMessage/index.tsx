import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MainActionButton } from "..";

export default function EmptyCartMessage() {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <>
      <Typography align="center" sx={{ fontSize: "180%" }}>
        Don't be shy add some Products
      </Typography>
      <MainActionButton fullWidth variant="contained" onClick={handleGoBack}>
        <ArrowBackIcon sx={{ mr: 2 }} />
        Go Back
      </MainActionButton>
    </>
  );
}
