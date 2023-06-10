import React from "react";
import "../../utils/css/base.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Carousel from "react-bootstrap/Carousel";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import home_img1 from "../../asset/my-hotel1.png";
import home_img2 from "../../asset/my-hotel2.png";
import home_img3 from "../../asset/my-hotel3.png";
import home_img4 from "../../asset/my-hotel4.png";
import home_img5 from "../../asset/1.png";
import home_img6 from "../../asset/2.png";
import home_img7 from "../../asset/3.png";
import home_img8 from "../../asset/4.png";
import home_img9 from "../../asset/5.png";
import home_img10 from "../../asset/6.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { themeSelector } from "../../service/selector";

const Home = () => {
  const theme = useSelector(themeSelector);
  const { t } = useTranslation();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 577 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 577, min: 0 },
      items: 2,
    },
  };
  return (
    <div
      className={styles.home_carousel_container}
      style={{ backgroundColor: theme.background, color: theme.textColor }}
    >
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={2500}>
          <Link to={`/accomodation`}>
            <img className={styles.home_carousel} src={home_img1} alt="home" />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <Link to={`/accomodation`}>
            <img className={styles.home_carousel} src={home_img2} alt="home" />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <Link to={`/accomodation`}>
            <img className={styles.home_carousel} src={home_img3} alt="home" />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <Link to={`/accomodation`}>
            <img className={styles.home_carousel} src={home_img4} alt="home" />
          </Link>
        </Carousel.Item>
      </Carousel>
      <div className={styles.home_welcome}>
        <div className={styles.home_container}>
          <div className={styles.home_wrapper}>
            <div className={styles.home_content}>
              <h1 className={styles.title} style={{ color: theme.textColor }}>
                {t("content.home_title")}
              </h1>
              <div className={styles.content}>
                <p style={{ color: theme.textColor }}>
                  {t("content.home_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MultiCarousel
        swipeable={true}
        draggable={false}
        infinite={true}
        responsive={responsive}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        autoPlay={true}
        autoPlaySpeed={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <img style={{ width: "100%" }} src={home_img5} alt="home" />
        </div>
        <div>
          <img style={{ width: "100%" }} src={home_img6} alt="home" />
        </div>
        <div>
          <img style={{ width: "100%" }} src={home_img7} alt="home" />
        </div>
        <div>
          <img style={{ width: "100%" }} src={home_img8} alt="home" />
        </div>
        <div>
          <img style={{ width: "100%" }} src={home_img9} alt="home" />
        </div>
        <div>
          <img style={{ width: "100%" }} src={home_img10} alt="home" />
        </div>
      </MultiCarousel>
    </div>
  );
};

export default Home;
