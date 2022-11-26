import Image from "next/image";
import React from "react";
import styles from "./Landing.module.css";
import logo from "../../assets/ecycle.png";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import {useRouter} from 'next/router'

function Landing() {
  const { data: session, status } = useSession();
  const router=useRouter();
  console.log(session, status);
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
        <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        gap:"2rem"
      }}>
        <button className={styles.button} onClick={()=>{signIn('google')}}>Get Started</button>
        <button className={styles.button} onClick={()=>{router.push('/register')}}>Register</button>
        
      
      </div>
      </div>
      
    </div>
  );
}

export default Landing;
