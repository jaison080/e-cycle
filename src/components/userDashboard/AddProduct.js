import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./AddProduct.module.css";

export default function AddProduct() {
  return (
    <div data-aos="fade-up">
      <Link className={styles.card} href="/addProduct">
        <AiOutlinePlus size={60}/>
        <h1>Add a new Product</h1>
      </Link>
    </div>
  );
}
