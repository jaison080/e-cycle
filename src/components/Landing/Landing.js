import Image from "next/image";
import React from "react";
import styles from "./Landing.module.css";
import logo from "../../assets/ecycle.png";

function Landing() {
  return (
    <div className={styles.landing_container}>
      <Image
        src={logo}
        style={{
          position: "absolute",
          top: "50px",
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      />
      <div className={styles.left}>
        <h1>Reuse, Recycle, Reduce</h1>
        <p>
          Reduce your carbon footprint by reusing and recycling your old
          appliances
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
