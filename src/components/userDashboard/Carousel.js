import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./Carousel.module.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { BackendBaseUrl } from "../../configs";
import { Typography } from "@mui/material";
import { A11y, Navigation, Scrollbar,Pagination } from "swiper";
import {MdSkipNext,MdSkipPrevious} from "react-icons/md";
import {Autoplay} from "swiper";

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
  
  const swiperRef = useRef();
  return (
    <>
    <div className={styles.carousel}>
    <MdSkipPrevious size={30} style={{cursor:"pointer"}} onClick={()=>{
      swiperRef.current?.slidePrev()
    }}/>
    
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      autoplay={{
        delay: 2000,
      }}
      modules={[Navigation,Autoplay]}
      onSlideChange={() => console.log("slide change")}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      className={styles.carouselWrapper}
    >
      {products.map((product) => {
        return (
          <SwiperSlide>
            <div className={styles.card}>
              <Typography variant="body">{product.category}</Typography>
              <Typography variant="body">{product.partName}</Typography>
              <Typography variant="body">{product.brand}</Typography>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    <MdSkipNext size={30} style={{cursor:"pointer"}} onClick={()=>{
      swiperRef.current?.slideNext()
    }}/>
    </div>
    </>
  );
}
