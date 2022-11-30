import styled from "@emotion/styled";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import speakerData from "../designSystem/creativespeakers/speakerData";
import CreativeSpeakers from "../designSystem/creativespeakers/CreativeSpeakers";

const Creative = () => {
  return (
    <div className="container text-center" style={{ padding: "3rem 0" }}>
      <Title>
        <span>creative</span>
        <span style={{ color: "#f2545f", marginLeft: "1rem" }}>speakers</span>
      </Title>
      <P>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        tempora fugiat earum sapiente dolore! Ea quibusdam ullam
      </P>
      <div>
        <Swiper
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={{ Autoplay }}
          slidesPerView={4}
          spaceBetween={50}
        >
          <div className="d-flex">
            {speakerData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CreativeSpeakers
                    img={item.img}
                    name={item.name}
                    job={item.job}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const P = styled.p`
  color: #777;
  line-height: 1.8;
  letter-spacing: 1px;
  margin: 2rem 0;
`;

export default Creative;
