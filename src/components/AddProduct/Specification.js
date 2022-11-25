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

export default function Form() {
  const [value, setValue] = useState();
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom>
          Brand
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="outlined-basic"
          label="Samsung, Apple..."
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom>
          Model Number
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="outlined-basic"
          label="AB12-38xxxxx"
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom>
          When did you buy it?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Purchase Date"
            value={value}
            views={["year", "month"]}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom>
          Is your product still under warranty?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup defaultValue={false} name="isUnderWarranty" row>
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom>
          Is your product in working condition?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
          <RadioGroup defaultValue={false} name="isWorking" row>
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <Typography variant="subtitle1" gutterBottom>
          Describe physical condition
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField multiline fullWidth />
      </Grid>
    </Grid>
  );
}
