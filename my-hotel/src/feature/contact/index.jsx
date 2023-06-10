import React from "react";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact_main">
      <div className="contact_container">
        <div className="contact_infor">
          <div>
            <h3 className="contact_title">Contact Us</h3>
            <div className="contact_desc">
              <p>
                <span className="contact_content">Hanoi Hotel</span>
                <br></br>
                D8 Giang Vo, Ba Dinh District, Hanoi, Vietnam
              </p>
              <p>
                <span className="contact_content">Tel</span>: (84-24) 3845 2270
                <br></br>
                <span className="contact_content">Fax</span>: (84-24) 3845 9209
                <br></br>
                <span className="contact_content">Email</span>:
                huudatvu6139@gmail.com<br></br>
                <span className="contact_content">Facebook</span>:
                www.facebook.com/hanoihotelvietnam
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
