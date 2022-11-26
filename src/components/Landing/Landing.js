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
      <div className={styles.left}>
        <Image src={vector} alt="" />
      </div>
      <div>
        <Image src={logo} /> <h1>Reuse, Recycle, Reduce</h1>
        <p>
          Reduce your carbon footprint by reusing and recycling your old
          appliances
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"row",
          gap:"2rem",
          width: "100%",

        }}>
          <button
            className={styles.button}
            onClick={() => {
              signIn("google");
            }}
          >
            Get Started
          </button>
          <button
            className={styles.button}
            onClick={() => {
              router.push("/register");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
