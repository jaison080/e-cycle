import { Typography } from "@mui/material";
import React from "react";
import { AddProduct, Carousel, Navbar } from "../components";
import styles from "../styles/userDashboard.module.css";
import CustomTitle from "../utils/customTitle";
export default function userDashboard() {
  return (
    <>
      <CustomTitle title="User Dashboard" />
      <Navbar />
      <div className={styles.wrapper}>
        <AddProduct />
        <div data-aos="fade-up">
          <Typography variant="h4">Your Products</Typography>
          <Carousel />
        </div>
      </div>
    </>
  );
}
