import React, { useState } from "react";
import appliancesData from "../../data/appliancesData";
import styles from "./ApplianceCard.module.css";
import Card from "../Card/Card";

function ApplianceCard() {

  const [toggle, setToggle] = useState(-1);
  return (
    <>
      <div className={styles.cards}>
        {appliancesData.map((appliance, index) => {
          return (
            <Card
              key={appliance.id}
              name={appliance.name}
              icon={appliance.icon}
              togglekey={index}
              toggle={toggle}
              setToggle={setToggle}
            />
          );
        })}
      </div>
    </>
  );
}

export default ApplianceCard;
