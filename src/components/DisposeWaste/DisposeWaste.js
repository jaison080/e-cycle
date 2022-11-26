import React from 'react'
import disposeWastesData from '../../data/disposeWastesData';
import Card from '../Card/Card';
import styles from "./DisposeWaste.module.css";
function DisposeWaste({toggle,setToggle,isWorking}) {
    return (
        <>
          <div className={styles.cards}>
            {
              (isWorking)?(
                disposeWastesData.map((waste, index) => {
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
                })):(
                  <>
                      <Card
                        key={disposeWastesData[1].id}
                        name={disposeWastesData[1].name}
                      //   icon={appliance.icon}
                        togglekey={1}
                        toggle={toggle}
                        setToggle={setToggle}
                      />
                      <Card
                        key={disposeWastesData[2].id}
                        name={disposeWastesData[2].name}
                      //   icon={appliance.icon}
                        togglekey={2}
                        toggle={toggle}
                        setToggle={setToggle}
                      />
                      </>
                    )
                  }
                
            
            
          </div>
        </>
      );
}

export default DisposeWaste