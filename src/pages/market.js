import React from 'react'
import styles from "../styles/Market.module.css";
import Card from "../components/marketCard/Card"
import  Navbar  from '../components/marketNavbar/Navbar';
function market() {
    const arr = Array.from(Array(9).keys());
    console.log(arr);
  return (
    <>
    <Navbar/>
    <div className={styles.cards}>
      {arr.map((appliance, index) => {
        return (
          <Card
           name="bolts"
           description = "super rusty, dont forget to take a tetnus shot after touching it"
          />
        );
      })}
    </div>
  </>
  )
}

export default market