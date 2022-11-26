import React, { useState } from "react";
import styles from "../styles/Appliances.module.css";
import CustomTitle from "../utils/customTitle";
import { Box, Button, Stepper } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { BackendBaseUrl } from "../configs";
import appliancesData from "../data/appliancesData";
import {
  DisposeWaste,
  ConfirmOrder,
  ApplianceCard,
  Specification,
} from "../components";
import disposeWastesData from "../data/disposeWastesData";
import { useRouter } from "next/router";

const steps = [
  "Choose product category",
  "Enter Product Details",
  "Confirm Details",
  "Dispose E-Wastes",
];
function Appliances() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [photo, setPhoto] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [selectedWayId, setSelectedWayId] = useState(-1);
  const [brand, setBrand] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(0);
  const [isUnderWarranty, setIsUnderWarranty] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [physicalCondition, setPhysicalCondition] = useState("");

  const router = useRouter();
  console.log(
    selectedCategoryId,
    brand,
    modelNumber,
    purchaseDate,
    isUnderWarranty,
    isWorking,
    physicalCondition
  );

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 0 && selectedCategoryId === -1) {
      alert("Please select a category first");
      return;
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  async function uploadProduct() {
    // console.log(selectedCategoryId, appliancesData);
    const selectedCategory = appliancesData.find((category) => {
      return category.id == selectedCategoryId;
    });
    const selectedWay = disposeWastesData.find((way) => {
      return way.id == selectedWayId;
    });
    const userMail = "jaisondennis080@gmail.com";
    const selectedCategoryName = selectedCategory?.name;
    // console.log(selectedCategoryName);
    const selectedWayName = selectedWay?.name;
    const res = await axios
      .post(`${BackendBaseUrl}/api/postProductInfo`, {
        userMail: userMail,
        category: selectedCategoryName,
        brand,
        modelNo: modelNumber,
        purchaseDate,
        isWarranty: isUnderWarranty,
        isWorking,
        currentCondition: physicalCondition,
        imageUrl: "",
        disposalMethod: selectedWayName,
      })
      .then((res) => {
        router.push("/complete");
      });
  }

  return (
    <>
      <CustomTitle title="Add Product" />
      <div className={styles.appliances_container}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={styles.stepper_container}>
                {activeStep === 0 && (
                  <ApplianceCard
                    toggle={selectedCategoryId}
                    setToggle={setSelectedCategoryId}
                  />
                )}
                {activeStep === 1 && (
                  <Specification
                    brand={brand}
                    setBrand={setBrand}
                    modelNumber={modelNumber}
                    setModelNumber={setModelNumber}
                    purchaseDate={purchaseDate}
                    setPurchaseDate={setPurchaseDate}
                    isUnderWarranty={isUnderWarranty}
                    setIsUnderWarranty={setIsUnderWarranty}
                    isWorking={isWorking}
                    setIsWorking={setIsWorking}
                    physicalCondition={physicalCondition}
                    setPhysicalCondition={setPhysicalCondition}
                    setPhoto={setPhoto}
                  />
                )}
                {activeStep === 2 && (
                  <ConfirmOrder
                    data={{
                      appliance: appliancesData[selectedCategoryId].name,
                      brand,
                      modelNumber,
                      purchaseDate,
                      isUnderWarranty,
                      isWorking,
                      physicalCondition,
                    }}
                  />
                )}
                {activeStep === 3 && (
                  <DisposeWaste
                    toggle={selectedWayId}
                    setToggle={setSelectedWayId}
                    isWorking={isWorking}
                  />
                )}
              </div>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  variant="contained"
                  className={styles.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  <ArrowBackIcon size={25} color="#fff" />
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                {activeStep === steps.length - 1 ? (
                  <Button
                    onClick={uploadProduct}
                    variant="contained"
                    className={styles.button}
                  >
                    Finish
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    className={styles.button}
                  >
                    Next
                    <ArrowForwardIcon size={25} color="#fff" />
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
}

export default Appliances;
