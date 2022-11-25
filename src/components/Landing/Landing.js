import React from 'react'
import styles from "./Landing.module.css";
function Landing() {
  return (
    <div className={styles.landing_container}>
        <div className={styles.left}>
            <h1>Reuse, Recycle, Reduce</h1>
            <p>Reduce your carbon footprint by reusing and recycling your old appliances</p>
            <button>Get Started</button>
        </div>
    </div>
  );
}

export default Landing