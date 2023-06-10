import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  successToast,
  errorToast,
  warnToast,
} from "../../utils/toastify/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../../utils/validate";
import { addBooking } from "../../service/bookingThunk";
import { getLocalStorage } from "../../utils/localStore";

export default function Booking() {
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const token = getLocalStorage("token");
  const id = getLocalStorage("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      warnToast("Bạn phải đăng nhập trước đã");
      navigate("/login");
    }
  }, [token, navigate]);

  const onSubmit = (data) => {
    setLoad(true);
    const booking = {
      id: id,
      newBooking: {
        checkIn: data.checkIn.toString(),
        checkOut: data.checkOut.toString(),
        number: data.number,
        type: data.type,
      },
    };
    dispatch(addBooking(booking)).then((res) => {
      if (res.payload) {
        successToast("Booking room successfully");
        navigate("/account");
      } else {
        errorToast("Booking false");
        setLoad(false);
      }
    });
  };

  const handleOnhide = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(bookingSchema),
  });

  return (
    <div>
      <div className="loginBody"></div>
      <Modal
        show={true}
        onHide={handleOnhide}
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="checkin" className="mb-3">
              <Form.Label>Ngày nhận phòng</Form.Label>
              <Form.Control
                type="date"
                name="checkIn"
                {...register("checkIn", { value: "" })}
              />
              <Form.Text className="text-danger">
                {errors.checkIn?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="checkout" className="mb-3">
              <Form.Label>Ngày trả phòng</Form.Label>
              <Form.Control
                type="date"
                name="checkOut"
                {...register("checkOut", { value: "" })}
              />
              <Form.Text className="text-danger">
                {errors.checkOut?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="type" className="mb-3">
              <Form.Label>Loại phòng</Form.Label>
              <Form.Control
                as="select"
                name="type"
                {...register("type", { value: "" })}
              >
                <option value="delux">DELUXE ROOM</option>
                <option value="predelux">PREMIUM DELUXE ROOM</option>
                <option value="preminum">PREMIUM ROOM</option>
                <option value="junior">JUNIOR SUITE</option>
                <option value="executive">EXECUTIVE SUITE</option>
                <option value="deluxsuite">DELUX SUITE</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {errors.type?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="number" className="mb-3">
              <Form.Label>Số lượng phòng</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={8}
                name="number"
                {...register("number", { value: "" })}
              />
              <Form.Text className="text-danger">
                {errors.number?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="desc" className="mb-3">
              <Form.Label>Yêu cầu khác:</Form.Label>
              <br></br>
              <Form.Control as="textarea" rows={3} name="desc" />
            </Form.Group>
            <Form.Group className="d-grid">
              <Button variant="success" type="submit" disabled={load}>
                Book Now
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
