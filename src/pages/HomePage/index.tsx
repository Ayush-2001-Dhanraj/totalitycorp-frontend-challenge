import { Box, Typography, Divider, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Filter from "../../components/Filter";
import ProductCard from "./ProductCard";
import LoadingAnimation from "../../components/LoadingAnimation";
import EmptyAnimation from "../../components/EmptyAnimation";

const Styledtypography = styled(Typography)(({ theme }) => ({
  fontSize: "60px",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

const StyledDivider = styled(Divider)({
  backgroundColor: "black",
});

export default function HomePage() {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  return (
    <>
      <Box p={2}>
        <Styledtypography>
          Regal
          <br />
          Sovereignty
        </Styledtypography>
        <Typography
          mb={2}
          sx={{
            color: "#00796b",
            fontSize: "90%",
            fontStyle: "italic",
          }}
        >
          Regal Sovereignty: Unveiling Timeless Luxury. We blend heritage with
          opulence to craft your unique style statement
        </Typography>
        <StyledDivider />
      </Box>
      <Box p={2} pt={0}>
        <Filter />
      </Box>
      <Box p={2}>
        <Grid container spacing={6}>
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            products?.map((product) => {
              return <ProductCard product={product} key={product?.id} />;
            })
          )}
          {products?.length === 0 && !isLoading && <EmptyAnimation />}
        </Grid>
      </Box>
    </>
  );
}
