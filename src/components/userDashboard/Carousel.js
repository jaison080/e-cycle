import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Carousel.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BackendBaseUrl } from "../../configs";
import { Typography } from "@mui/material";

async function getProducts() {
  const res = await axios.get(`${BackendBaseUrl}/api/getProductParts`);
  return res.data;
}
export default function Carousel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      autoplay={{
        delay: 2000,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={style.carouselWrapper}
    >
      {/* {products.map((product) => {
        return (
          <SwiperSlide>
            <div className={style.card}>
              <Typography variant="body">{product.category}</Typography>
              <Typography variant="body">{product.partName}</Typography>
              <Typography variant="body">{product.brand}</Typography>
            </div>
          </SwiperSlide>
        );
      })} */}
    </Swiper>
  );
}
