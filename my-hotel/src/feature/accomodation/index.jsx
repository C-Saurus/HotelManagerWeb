import React from "react";
import Carousel from "react-bootstrap/Carousel";
import accom1 from "../../asset/accomo_1.jpg";
import accom2 from "../../asset/accomo_2.jpg";
import accom3 from "../../asset/accomo_3.jpg";
import accom4 from "../../asset/accomo_4.jpg";
import accom5 from "../../asset/accomo_5.jpg";
import deluxe from "../../asset/accomo_deluxe.jpg";
import predeluxe from "../../asset/accomo_premiumdeluxe.jpg";
import deluxesuite from "../../asset/accomo_deluxesuite.jpg";
import excutive from "../../asset/accomo_executive.jpg";
import junior from "../../asset/accomo_junior.jpg";
import premium from "../../asset/accomo_premium.jpg";
import styles from "./accom.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <img
            className={styles.accom_first_img}
            src={accom1}
            alt="accomodation"
          ></img>
          <Carousel.Caption>
            <div className={styles.title}>Rooms & Suites</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className={styles.accom_first_img}
            src={accom2}
            alt="accomodation"
          ></img>
          <Carousel.Caption>
            <div className={styles.title}>Rooms & Suites</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className={styles.accom_first_img}
            src={accom3}
            alt="accomodation"
          ></img>
          <Carousel.Caption>
            <div className={styles.title}>Rooms & Suites</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className={styles.accom_first_img}
            src={accom4}
            alt="accomodation"
          ></img>
          <Carousel.Caption>
            <div className={styles.title}>Rooms & Suites</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className={styles.accom_first_img}
            src={accom5}
            alt="accomodation"
          ></img>
          <Carousel.Caption>
            <div className={styles.title}>Rooms & Suites</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={styles.page}>
        <div className={styles.intro}>
          <div className={styles.first_thumbnail}></div>
          <div className={styles.second_thumbnail}></div>
          <div className={styles.content_thumbnails}>
            <div className={styles.page_content}>
              <h1 className={styles.the_title}>ACCOMMODATION</h1>
              <p className={styles.the_title_p}>
                A calm refuge in a buzzing and vibrant metropolis, Hanoi Hotel’s
                beautifully furnished guest rooms have been designed to ensure a
                splendid experience is yours. Take your choice of various unique
                options tailor-made to give each and every guest a travel
                experience harmonizing between the heritage local flavour and
                refined luxury.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview_room}>
        <div className={styles.container_preview}>
          <div className={styles.wrapper_preview}>
            <div className={styles.preview_main}>
              <div
                className={styles.preview_thum}
                style={{
                  backgroundImage: `url(${deluxe})`,
                  right: "0",
                  left: "50%",
                }}
              ></div>
              <div className={styles.preview_content_wrapper}>
                <div className={styles.preview_content}>
                  <span className={styles.preview_content_title}>
                    Deluxe Room
                  </span>
                  <div className={styles.ocupancy}>
                    <span className={styles.label}>Maximum occupation:</span>
                    <span className={styles.text}>
                      <span className={styles.tot}>2 People</span>
                      <span className={styles.det}>
                        (2 Adults / 1 Children)
                      </span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.label}>Description:</span>
                    <p>
                      – Free wifi<br></br>– Minibar<br></br>– Non-smoking room
                      available<br></br>– Cable movie channel<br></br>– Tea &
                      Coffee making<br></br>– Safety box<br></br>– Facility
                      <br></br>
                    </p>
                  </div>
                  <div className={styles.btns}>
                    <div className={styles.btns_book}>Book now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview_room}>
        <div className={styles.container_preview}>
          <div className={styles.wrapper_preview}>
            <div className={styles.preview_main}>
              <div
                className={styles.preview_thum}
                style={{
                  backgroundImage: `url(${predeluxe})`,
                  right: "50%",
                  left: "0",
                }}
              ></div>
              <div className={styles.preview_content_wrapper_left}>
                <div className={styles.preview_content}>
                  <span className={styles.preview_content_title}>
                    Premium Deluxe Room
                  </span>
                  <div className={styles.ocupancy}>
                    <span className={styles.label}>Maximum occupation:</span>
                    <span className={styles.text}>
                      <span className={styles.tot}>2 People</span>
                      <span className={styles.det}>
                        (2 Adults / 1 Children)
                      </span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.label}>Description:</span>
                    <p>
                      – Free wifi<br></br>– Minibar<br></br>– Non-smoking room
                      available<br></br>– Cable movie channel<br></br>– Tea &
                      Coffee making<br></br>– Safety box<br></br>– Facility
                      <br></br>
                    </p>
                  </div>
                  <div className={styles.btns}>
                    <div className={styles.btns_book}>Book now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.preview_room}>
        <div className={styles.container_preview}>
          <div className={styles.wrapper_preview}>
            <div className={styles.preview_main}>
              <div
                className={styles.preview_thum}
                style={{
                  backgroundImage: `url(${deluxesuite})`,
                  right: "0",
                  left: "50%",
                }}
              ></div>
              <div className={styles.preview_content_wrapper}>
                <div className={styles.preview_content}>
                  <span className={styles.preview_content_title}>
                    Deluxe Suite
                  </span>
                  <div className={styles.ocupancy}>
                    <span className={styles.label}>Maximum occupation:</span>
                    <span className={styles.text}>
                      <span className={styles.tot}>2 People</span>
                      <span className={styles.det}>
                        (2 Adults / 1 Children)
                      </span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.label}>Description:</span>
                    <p>
                      – Free wifi<br></br>– Minibar<br></br>– Non-smoking room
                      available<br></br>– Cable movie channel<br></br>– Tea &
                      Coffee making<br></br>– Safety box<br></br>– Facility
                      <br></br>
                    </p>
                  </div>
                  <div className={styles.btns}>
                    <div className={styles.btns_book}>Book now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview_room}>
        <div className={styles.container_preview}>
          <div className={styles.wrapper_preview}>
            <div className={styles.preview_main}>
              <div
                className={styles.preview_thum}
                style={{
                  backgroundImage: `url(${premium})`,
                  right: "50%",
                  left: "0",
                }}
              ></div>
              <div className={styles.preview_content_wrapper_left}>
                <div className={styles.preview_content}>
                  <span className={styles.preview_content_title}>
                    Premium Room
                  </span>
                  <div className={styles.ocupancy}>
                    <span className={styles.label}>Maximum occupation:</span>
                    <span className={styles.text}>
                      <span className={styles.tot}>2 People</span>
                      <span className={styles.det}>
                        (2 Adults / 1 Children)
                      </span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.label}>Description:</span>
                    <p>
                      – Free wifi<br></br>– Minibar<br></br>– Non-smoking room
                      available<br></br>– Cable movie channel<br></br>– Tea &
                      Coffee making<br></br>– Safety box<br></br>– Facility
                      <br></br>
                    </p>
                  </div>
                  <div className={styles.btns}>
                    <div className={styles.btns_book}>Book now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview_room}>
        <div className={styles.container_preview}>
          <div className={styles.wrapper_preview}>
            <div className={styles.preview_main}>
              <div
                className={styles.preview_thum}
                style={{
                  backgroundImage: `url(${excutive})`,
                  right: "0",
                  left: "50%",
                }}
              ></div>
              <div className={styles.preview_content_wrapper}>
                <div className={styles.preview_content}>
                  <span className={styles.preview_content_title}>
                    Excutive Suite
                  </span>
                  <div className={styles.ocupancy}>
                    <span className={styles.label}>Maximum occupation:</span>
                    <span className={styles.text}>
                      <span className={styles.tot}>2 People</span>
                      <span className={styles.det}>
                        (2 Adults / 1 Children)
                      </span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.label}>Description:</span>
                    <p>
                      – Free wifi<br></br>– Minibar<br></br>– Non-smoking room
                      available<br></br>– Cable movie channel<br></br>– Tea &
                      Coffee making<br></br>– Safety box<br></br>– Facility
                      <br></br>
                    </p>
                  </div>
                  <div className={styles.btns}>
                    <div className={styles.btns_book}>Book now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview_room} style={{ paddingBottom: "60px" }}>
        <div className={styles.container_preview}>
          <div className={styles.wrapper_preview}>
            <div className={styles.preview_main}>
              <div
                className={styles.preview_thum}
                style={{
                  backgroundImage: `url(${junior})`,
                  right: "50%",
                  left: "0",
                }}
              ></div>
              <div className={styles.preview_content_wrapper_left}>
                <div className={styles.preview_content}>
                  <span className={styles.preview_content_title}>
                    Junior Suite
                  </span>
                  <div className={styles.ocupancy}>
                    <span className={styles.label}>Maximum occupation:</span>
                    <span className={styles.text}>
                      <span className={styles.tot}>2 People</span>
                      <span className={styles.det}>
                        (2 Adults / 1 Children)
                      </span>
                    </span>
                  </div>
                  <div className={styles.description}>
                    <span className={styles.label}>Description:</span>
                    <p>
                      – Free wifi<br></br>– Minibar<br></br>– Non-smoking room
                      available<br></br>– Cable movie channel<br></br>– Tea &
                      Coffee making<br></br>– Safety box<br></br>– Facility
                      <br></br>
                    </p>
                  </div>
                  <div className={styles.btns}>
                    <div className={styles.btns_book}>Book now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
