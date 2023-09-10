import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Grid,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/system";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  fetchProducts,
  filterProducts,
} from "../../redux/features/productSlice";
import toast from "react-hot-toast";

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
});

export default function Filter() {
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );
  const dispatch = useDispatch();

  const [value, setValue] = useState<number[]>([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<string>("");

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleRatingChange = (event: SelectChangeEvent) => {
    setSelectedRating(event.target.value);
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts(selectedCategory))
      .then(() => {
        dispatch(
          filterProducts({
            priceRange: { min: value[0], max: value[1] },
            minRating: selectedRating ? selectedRating : 0,
          })
        );
      })
      .catch(() => {
        toast("Oops! Something went wrong");
      });
  }, [dispatch, selectedRating, value, selectedCategory]);

  return (
    <StyledGrid container spacing={2}>
      <Grid item md={2} xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select onChange={handleCategoryChange} value={selectedCategory}>
            <MenuItem value="">All</MenuItem>
            {categories?.map((category) => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2} xs={6}>
        <FormControl fullWidth>
          <InputLabel>
            Ratings {">= "} {!selectedRating ? "any" : ""}
          </InputLabel>
          <Select onChange={handleRatingChange} value={selectedRating}>
            <MenuItem value="">All</MenuItem>
            {[1, 2, 3, 4, 5].map((rating) => (
              <MenuItem key={rating} value={rating}>
                {rating}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={8} xs={12}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <CurrencyRupeeIcon fontSize="small" />
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            min={0}
            max={2000}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            sx={{ color: "#00796b", height: "2px" }}
          />
        </Stack>
      </Grid>
    </StyledGrid>
  );
}
