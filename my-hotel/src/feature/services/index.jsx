import React from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import "../../utils/css/base.css";
import ser1 from "../../asset/ser1.jpg";
import ser2 from "../../asset/ser2.jpg";
import ser3 from "../../asset/ser3.jpg";
import ser4 from "../../asset/ser4.jpg";
import ser5 from "../../asset/ser5.jpg";
import ser6 from "../../asset/ser6.jpg";
import ser_thumb1 from "../../asset/ser_thumb1.jpg";
import ser_thumb2 from "../../asset/ser_thum2.jpg";
const Services = () => {
  return (
    <div>
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <img className="service_carousel_img" src={ser1} alt="service"></img>
          <Carousel.Caption>
            <div className="service_carousel_title">Discovery</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="service_carousel_img" src={ser2} alt="service"></img>
          <Carousel.Caption>
            <div className="service_carousel_title">Discovery</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="service_carousel_img" src={ser3} alt="service"></img>
          <Carousel.Caption>
            <div className="service_carousel_title">Discovery</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="service_carousel_img" src={ser4} alt="service"></img>
          <Carousel.Caption>
            <div className="service_carousel_title">Discovery</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="service_carousel_img" src={ser5} alt="service"></img>
          <Carousel.Caption>
            <div className="service_carousel_title">Discovery</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="service_carousel_img" src={ser6} alt="service"></img>
          <Carousel.Caption>
            <div className="service_carousel_title">Discovery</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <main className="service_main">
        <Container className="service_main_wrapper">
          <div
            className="service_thumb1"
            style={{ backgroundImage: `url(${ser_thumb1})` }}
          ></div>
          <div
            className="service_thumb2"
            style={{ backgroundImage: `url(${ser_thumb2})` }}
          ></div>
          <div className="service_page_content_wrap">
            <div className="service_page_content">
              <h1 className="service_page_title">Services</h1>
              <p>
                <b>Golden Dragon Restaurant:</b>
                <br></br>
                Is one of the most famous Chinese dining venues in Hanoi, our
                talented and experienced chefs guarantee traditional flavors of
                Dim Sum and an array of fine foods of your choice. Weddings and
                parties are well known to be held at the Golden Dragon
                Restaurant for its ideal setting accompanied by personalized
                service to suit any special occasions.
              </p>
              <br></br>
              <p>
                <b>Hanoi Hotel Food Centre Restaurant:</b>
                <br></br>
                Our Hanoi Hotel Food Centre is one of the best casual dining
                restaurants in Hanoi serving Cantonese Cuisine and a wide
                selection of seafood and snacks. Cool breezes from the
                magnificent view of the lake offer an ideal setting to indulge
                in delicious foods and drinks with family and friends.
              </p>
              <br></br>
              <p>
                <b>Dynasty Restaurant:</b>
                <br></br>
                Known as one of the most luxurious restaurants in Hanoi Capital
                City, Dynasty has 6 VIP rooms for entire privacy and an
                irresistible selection of fine foods and old wines to ensure
                each individual desire is fulfilled. The elegant ambiance
                accompanied by personalized services makes you feel royal. And
                it is no doubt Dynasty is proud to be the best dining venue to
                invite or host your VIPs for lunch or dinner meetings…
              </p>
            </div>
          </div>
        </Container>
      </main>
      <div className="service_preview">
        <Container>
          <Row>
            <Col>
              <div className="service_preview_item">
                <span className="service_preview_item_img">
                  <img
                    src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/11/Untitled_Panorama2-1000x671.jpg"
                    alt="thumb"
                  ></img>
                </span>
                <div className="service_preview_item_content">
                  <div className="service_preview_item_content-title">
                    Food Centre
                  </div>
                  <div className="service_preview_item_content-des">
                    <p>
                      Our Food Centre is one of the best casual dining
                      restaurants in Hanoi serving Cantonese…
                    </p>
                  </div>
                  <div className="service_preview_item_content-btn">
                    <span className="service_btn">Read more</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
