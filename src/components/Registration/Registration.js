import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useRouter } from "next/router";
import { BackendBaseUrl } from "../../configs";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Registration() {
  const router = useRouter();
  const [role, setRole] =useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userData = {
      name: data.get("firstName") + data.get("lastName"),
      email: data.get("email"),
      address: data.get("address"),
      role:role
    };
    console.log(userData);
    await axios
      .post(`${BackendBaseUrl}/api/postRegistrations`, userData)
      .then((res) => {
        console.log(res.data);
        router.push("/");
      });
  };

  return (
    <Container component="main" maxWidth="xs"  sx={{
      backgroundColor:"none"
    }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor:"none"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} data-aos="fade-down">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" data-aos="fade-down">
          Registration
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                data-aos="fade-right"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                data-aos="fade-left"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                data-aos="fade-right"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                name="address"
                label="Address"
                type="address"
                id="address"
                autoComplete="address"
                data-aos="fade-left"
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth data-aos="fade-right">
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={handleChange}
              >
                <MenuItem value={"Retailer"}>Retailer</MenuItem>
                <MenuItem value={"NGO"}>NGO</MenuItem>
                <MenuItem value={"Company"}>Company</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} data-aos="fade-left">
              <Typography>Upload Documents</Typography>
              <input type="file" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the Terms and Conditions."
                data-aos="fade-up"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            data-aos="fade-up"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
