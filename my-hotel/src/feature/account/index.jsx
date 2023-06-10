import { Tab, Tabs } from "react-bootstrap";

import Profile from "./profile";
import BookingDetail from "./bookingDetail";
import { errorToast, warnToast } from "../../utils/toastify";
import { useEffect } from "react";
import { getLocalStorage } from "../../utils/localStore";
import { getUser } from "../../service/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Account() {
  const token = getLocalStorage("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      warnToast("Bạn cần đăng nhập trước!");
      navigate("/login");
    } else {
      dispatch(getUser(token)).then((res) => {
        if (!res.payload) {
          errorToast("Please check your internet");
          navigate("/missing");
        }
      });
    }
  }, [token, navigate, dispatch]);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className=""
      style={{ paddingTop: "155px" }}
      justify
    >
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
      <Tab eventKey="booking" title="Booking List">
        <BookingDetail />
      </Tab>
    </Tabs>
  );
}

export default Account;
