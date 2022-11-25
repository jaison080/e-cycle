import {
  Grid,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { Container } from "@mui/system";

export default function Form({
  brand,
  setBrand,
  modelNumber,
  setModelNumber,
  purchaseDate,
  setPurchaseDate,
  isUnderWarranty,
  setIsUnderWarranty,
  isWorking,
  setIsWorking,
  physicalCondition,
  setPhysicalCondition,
}) {
  const [value, setValue] = useState();
  return (
    <Container sx={{width:"90vw"}}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom data-aos="fade-left">
          Brand
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          data-aos="fade-right"
          id="outlined-basic"
          label="Samsung, Apple..."
          variant="outlined"
          fullWidth
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom data-aos="fade-left">
          Model Number
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          data-aos="fade-right"
          id="outlined-basic"
          label="AB12-38xxxxx"
          variant="outlined"
          fullWidth
          value={modelNumber}
          onChange={(e) => setModelNumber(e.target.value)}
        />
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom data-aos="fade-left">
          When did you buy it?
        </Typography>
      </Grid>
      <Grid item xs={8} data-aos="fade-right">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Purchase Date"
            value={purchaseDate}
            onChange={(newValue) => {
              const date = newValue.toDate().toISOString();
              setPurchaseDate(date);
            }}
            views={["year", "month"]}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom data-aos="fade-left">
          Is your product still under warranty?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl data-aos="fade-right">
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            defaultValue={false}
            name="isUnderWarranty"
            row
            value={isUnderWarranty}
            onChange={(e) => {
              setIsUnderWarranty(e.target.value == "true");
            }}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom data-aos="fade-left">
          Is your product in working condition?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl data-aos="fade-right">
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            defaultValue={false}
            name="isWorking"
            row
            value={isWorking}
            onChange={(e) => {
              setIsWorking(e.target.value == "true");
            }}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom data-aos="fade-left">
          Describe physical condition
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          data-aos="fade-right"
          multiline
          fullWidth
          value={physicalCondition}
          onChange={(e) => setPhysicalCondition(e.target.value)}
        />
      </Grid>
      
    </Grid>
    </Container>
  );
}
