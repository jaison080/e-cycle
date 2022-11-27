import React, { useEffect } from "react";
import styles from "../styles/Market.module.css";
import { Navbar, MarketCard } from "../components";
import { BackendBaseUrl } from "../configs";
import axios from "axios";
import CustomTitle from "../utils/customTitle";
function market() {
  const [initial, setInitial] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const displayProducts = async () => {
    const response = await axios.get(`${BackendBaseUrl}/api/getProductInfo`);
    const data = await response;
    console.log(data.data);
    if (data.data) {
      setInitial(data.data);
      setProducts(data.data);
    }
  };
  useEffect(() => {
    displayProducts();
    console;
  }, []);
  return (
    <>
      <CustomTitle title="Market" />
      <Navbar setProducts={setProducts} initial={initial} />
      <div className={styles.cards}>
        {products.map((appliance, index) => {
          return (
            <MarketCard
              name={
                appliance.item
                  ? `${appliance.item.brand} ${appliance.item.modelNo}`
                  : `${appliance.brand} ${appliance.modelNo}`
              }
              description={
                appliance.item ? appliance.item.category : appliance.category
              }
            />
          );
        })}
      </div>
    </>
  );
}

export default market;
