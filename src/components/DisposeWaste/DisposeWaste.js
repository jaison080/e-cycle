import React from 'react'
import disposeWastesData from '../../data/disposeWastesData';
import Card from '../Card/Card';
import styles from "./DisposeWaste.module.css";
function DisposeWaste({toggle,setToggle}) {
    return (
        <>
          <div className={styles.cards}>
            {disposeWastesData.map((waste, index) => {
              return (
                <Card
                  key={waste.id}
                  name={waste.name}
                //   icon={appliance.icon}
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

export default DisposeWaste