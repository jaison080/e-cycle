import { Typography } from "@mui/material";
import React from "react";
import AddProduct from "../components/userDashboard/AddProduct";
import Carousel from "../components/userDashboard/Carousel";
import Navbar from "../components/userDashboard/Navbar";
import styles from "../styles/userDashboard.module.css";
export default function userDashboard() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
      <AddProduct />
      <Typography variant="h4" >Your Products</Typography>
      <Carousel />
      </div>
      
    </>
  );
}
