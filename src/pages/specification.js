import { Box } from "@mui/material";
import Form from "../components/AddProduct/Specification";
import styles from "../styles/Specification.module.css";

export default function Specification() {
  return (
    <Box className={styles.wrapper}>
      <Form />
    </Box>
  );
}
