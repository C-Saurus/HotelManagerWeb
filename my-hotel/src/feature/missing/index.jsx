import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Missing = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        paddingTop: "180px",
        marginBottom: "150px",
        textAlign: "center",
      }}
    >
      <Container>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "300" }}>
            OOPS! PAGE NOT FOUND
          </div>
          <div style={{ fontSize: "80px", fontWeight: "600" }}>404</div>
          <div style={{ fontSize: "16px", fontWeight: "300" }}>
            Chúng tôi xin lỗi, trang web bạn yêu cầu không tìm thấy
          </div>
          <div
            onClick={handleBackHome}
            className="btn btn-outline-secondary mt-3"
          >
            Back to home
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Missing;
