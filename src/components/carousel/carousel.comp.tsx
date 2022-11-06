import { Box, Heading } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import p_1 from "../../assets/images/product_images/p_1.png";
import p_2 from "../../assets/images/product_images/p_2.png";
import p_3 from "../../assets/images/product_images/p_3.png";
import p_4 from "../../assets/images/product_images/p_4.png";
import p_5 from "../../assets/images/product_images/p_5.png";
import p_6 from "../../assets/images/product_images/p_6.png";
import p_7 from "../../assets/images/product_images/p_7.png";
import p_8 from "../../assets/images/product_images/p_8.png";
import p_9 from "../../assets/images/product_images/p_9.png";
import p_10 from "../../assets/images/product_images/p_10.png";
import p_11 from "../../assets/images/product_images/p_11.png";
import p_12 from "../../assets/images/product_images/p_12.png";
import p_13 from "../../assets/images/product_images/p_13.png";
import p_14 from "../../assets/images/product_images/p_14.png";

import CarouselCard from "./carousel-card.sub-comp";

const Carousel = () => {
  return (
    <Box textAlign={"center"} p={8}>
      <Heading
        id="amatic-header"
        color={"black"}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={{ base: "3rem", md: "4rem", lg: "5rem" }}
      >
        PRODUKTY
      </Heading>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <CarouselCard imgSrc={p_1} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_2} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_3} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_4} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_5} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_6} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_7} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_8} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_9} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_10} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_11} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_12} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_13} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imgSrc={p_14} prodName="Torba" prodPrice="100" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
