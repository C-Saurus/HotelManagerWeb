import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  FormSelect,
  Modal,
  Spinner,
  Table,
} from "react-bootstrap";
import { deleteBooking, payBooking } from "../../../service/bookingThunk";
import { errorToast, successToast, warnToast } from "../../../utils/toastify";
import { getUser } from "../../../service/userSlice";
import { getLocalStorage } from "../../../utils/localStore";
import { useNavigate } from "react-router-dom";

const BookingDetail = () => {
  const token = getLocalStorage("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [history, setHistory] = useState();
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [it, setIt] = useState("");
  useEffect(() => {
    if (!token) {
      warnToast("Bạn phải đăng nhập trước đã!");
      navigate("/");
    }
    dispatch(getUser(token)).then((res) => {
      if (res.payload?.statusCode === 200) {
        setHistory(res.payload?.data.history);
      } else {
        errorToast(res.payload?.msg);
      }
    });
  }, [dispatch, navigate, token]);
  const handleDelete = (id) => {
    setLoad(true);
    dispatch(deleteBooking(id)).then((res) => {
      if (res.payload?.statusCode) {
        successToast("Deleted");
        setLoad(false);
      } else {
        errorToast("Please check your connect");
        setLoad(false);
      }
    });
  };
  const handlePay = () => {
    setLoad(true);
    dispatch(payBooking(it)).then((res) => {
      if (res.payload.statusCode === 200) {
        successToast("Pay successfully");
        setLoad(false);
        setShow(false);
      } else {
        errorToast("Please check your connect");
        setLoad(false);
        setShow(false);
      }
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setIt(item);
  };
  return (
    <>
      {!history ? (
        <div
          style={{
            backgroundColor: "#F0F0F0",
            height: "87vh",
            textAlign: "center",
            paddingTop: "25%",
          }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div
          className="pt-5"
          style={{
            marginBottom: "150px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          <Table striped hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>List Room</th>
                <th>CheckIn</th>
                <th>CheckOut</th>
                <th>Type</th>
                <th>isPay</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {item.room.map((i) => (
                      <div key={i.id}>
                        <span>{i.name}</span>
                      </div>
                    ))}
                  </td>
                  <td>{item.checkIn}</td>
                  <td>{item.checkOut}</td>
                  <td>{item.type}</td>
                  <td>{item.isPay ? "Đã trả" : "Chưa trả"}</td>
                  <td>
                    <Button
                      disabled={load}
                      onClick={() => handleDelete(item._id)}
                      className="me-3 btn-danger"
                    >
                      Delete
                    </Button>
                    <Button
                      disabled={load || item.isPay}
                      onClick={() => handleShow(item._id)}
                    >
                      Pay
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Checkout Money</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" value="You need to pay 980000vnđ" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Choose a payment method</Form.Label>
                  <FormSelect>
                    <option value="1">Money</option>
                    <option value="2">Card</option>
                    <option value="3">Banking</option>
                  </FormSelect>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your complain</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => handlePay()}>
                Pay
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default BookingDetail;
