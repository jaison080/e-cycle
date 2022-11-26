import Image from "next/image";
import React from "react";
import styles from "./Landing.module.css";
import logo from "../../assets/ecycle.png";
import vector from "../../assets/vector.png";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Landing() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session, status);
  if(session)
  {
    router.push("/userDashboard");
  }
  return (
    <div className={styles.landing_container}>
      <div className={styles.left} data-aos="fade-left">
        <Image src={vector} alt="" />
      </div>
      <div>
        <Image src={logo} data-aos="fade-up" /> <h1 data-aos="fade-up">Reuse, Recycle, Reduce</h1>
        <p data-aos="fade-up">
          Reduce your carbon footprint by reusing and recycling your old
          appliances
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"row",
          gap:"2rem",
          width: "100%",

        }} data-aos="fade-right">
          <div
            className={styles.button}
            data-aos="fade-up"
            onClick={() => {
              signIn("google");
            }}
          >
            Get Started
          </div>
          <div
            className={styles.button}
            data-aos="fade-up"
            onClick={() => {
              router.push("/register");
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
