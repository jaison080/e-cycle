import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styles from "./ConfirmOrder.module.css";

function ConfirmOrder({ data }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDate = (date) => {
    let d = new Date(date);
    return months[d.getMonth()] + " " + d.getFullYear();
  };
  return (
    <>
      <div className={styles.confirm_container}>
        <h1>Confirm Order</h1>
        <div>
          <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: "1rem", borderRadius: "30px" }}>
              <h3>Appliance Type: </h3>
              <p>{data.appliance}</p>
              <h3>Brand : </h3>
              <p>{data.brand}</p>
              <h3>Model Number : </h3>
              <p>{data.modelNumber}</p>
              <h3>When did you buy it? : </h3>
              <p>{getDate(data.purchaseDate)}</p>
              <h3>Is your product still under warranty? : </h3>
              <p>{data.isUnderWarranty ? "Yes" : "No"}</p>
              <h3>Is your product in working condition? : </h3>
              <p>{data.isWorking ? "Yes" : "No"}</p>
              <h3>Describe physical condition : </h3>
              <p>{data.physicalCondition}</p>
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ConfirmOrder;
