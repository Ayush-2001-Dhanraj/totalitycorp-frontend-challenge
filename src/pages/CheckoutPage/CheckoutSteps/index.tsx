import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { MainActionButton } from "..";

interface CheckoutStepsInterface {
  handleConfirmPurchase: () => void;
}

export default function CheckoutSteps({
  handleConfirmPurchase,
}: CheckoutStepsInterface) {
  return (
    <>
      <Accordion sx={{ mb: 2 }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>1. Contact Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" variant="outlined" fullWidth />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>2. Shipping Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Recipients Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Recipients Phone number"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex" }}>
            <TextField label="Street " variant="outlined" fullWidth />
            <TextField label="Apartment Number" variant="outlined" fullWidth />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>3. Payment Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Card Holder Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Card Number"
            variant="outlined"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCardIcon />
                </InputAdornment>
              ),
            }}
            inputProps={{
              maxLength: 12,
            }}
            fullWidth
          />
          <Box sx={{ display: "flex" }}>
            <TextField
              placeholder="MM/YY"
              variant="outlined"
              fullWidth
              inputProps={{
                maxLength: 5,
              }}
            />
            <TextField placeholder="CVV" variant="outlined" fullWidth />
          </Box>
        </AccordionDetails>
      </Accordion>
      <MainActionButton
        fullWidth
        variant="contained"
        onClick={handleConfirmPurchase}
      >
        Comfirm Purchase
      </MainActionButton>
    </>
  );
}
