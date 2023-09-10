import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { useState } from "react";
import SignIn from "../SignIn";

const StyledGridItem = styled(Box)({
  border: "1px solid black",
  textAlign: "center",
  cursor: "pointer",
});

const StyledGridContainer = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
});

export default function Header() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <StyledGridItem>
        <StyledGridContainer container spacing={0}>
          <Grid item md={2} xs={6}>
            <StyledGridContainer>
              <Grid item xs={6}>
                <StyledGridItem p={2} onClick={() => navigate("/")}>
                  Shop
                </StyledGridItem>
              </Grid>
              <Grid item xs={6}>
                <StyledGridItem p={2} onClick={scrollToBottom}>
                  Contact
                </StyledGridItem>
              </Grid>
            </StyledGridContainer>
          </Grid>
          <Grid item md={2} xs={6}>
            <StyledGridContainer>
              <Grid item xs={6}>
                <StyledGridItem p={2} onClick={handleOpenModal}>
                  Sign In
                </StyledGridItem>
              </Grid>
              <Grid item xs={6}>
                <StyledGridItem p={2} onClick={() => navigate("/checkout")}>
                  Cart
                </StyledGridItem>
              </Grid>
            </StyledGridContainer>
          </Grid>
        </StyledGridContainer>
      </StyledGridItem>
      {/* modal section */}
      <SignIn open={openModal} handleClose={handleCloseModal} />
    </>
  );
}
