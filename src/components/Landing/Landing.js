import React from 'react'
import styles from "./Landing.module.css";
import {signIn} from "next-auth/react";

function Landing() {
  return (
    <div className={styles.landing_container}>
        <div className={styles.left}>
            <h1>Reuse, Recycle, Reduce</h1>
            <p>Reduce your carbon footprint by reusing and recycling your old appliances</p>
            <button className={styles.button} onClick={()=>{signIn('google')}}>Get Started</button>
        </div>
    </div>
  );
}

export default Landing