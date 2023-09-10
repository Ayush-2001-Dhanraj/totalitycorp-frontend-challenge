import { Modal, Box, Typography, TextField, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "75%",
  backgroundColor: "#fff",
}));

interface SignInInterface {
  open: boolean;
  handleClose: () => void;
}

export default function SignIn({ open, handleClose }: SignInInterface) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledContainer p={4} boxShadow={24} borderRadius={2}>
        <StyledHeader id="modal-modal-title">
          Greetings! Welcome to luxury gift shop.
        </StyledHeader>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 1, mb: 2, fontSize: "90%", color: "#00796b" }}
        >
          Use your username and password to <b>login</b>.
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth />
        <Box mt={2} />
        <TextField label="Password" variant="outlined" fullWidth />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }} mt={2}>
          <IconButton sx={{ border: "1px solid #00796b" }}>
            <ArrowForwardIcon fontSize="medium" />
          </IconButton>
        </Box>
      </StyledContainer>
    </Modal>
  );
}
