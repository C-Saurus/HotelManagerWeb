import React from "react";

import "./index.css";
import { useState } from "react";
import { updateRoom, getRoomById, addRoom } from "../../../service/roomThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocalStorage } from "../../../utils/localStore";
import { successToast, errorToast, warnToast } from "../../../utils/toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { roomSchema } from "../../../utils/validate";
import { useForm } from "react-hook-form";
import { confirmAlert } from "react-confirm-alert";
const Detail = () => {
  const [edit, setEdit] = useState(false);
  const [load, setLoad] = useState(false);
  const [room, setRoom] = useState();
  const [desc, setDesc] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const token = getLocalStorage("token") ?? undefined;
  const userId = getLocalStorage("id") ?? undefined;
  const dispatch = useDispatch();
  const id = params?.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(roomSchema),
  });
  useEffect(() => {
    if (!token) {
      warnToast("Bạn phải đăng nhập trước đã!");
      navigate("/");
    }
    if (!userId || userId !== "64439d609eeb0d26361c2e02") {
      warnToast("Không có quyền truy cập!");
      navigate("/");
    }
    if (id !== "-1") {
      dispatch(getRoomById(id)).then((res) => {
        if (res.payload?.statusCode === 200) {
          setRoom(res.payload?.data);
          setDesc(
            "Overlooking the scenic Giang Vo lake, 28 sqm Deluxe Rooms offer guests entire tranquility and privacy. The perfect setting eases tension of a long working day or relaxes leisure guests after a day of wandering around.\n" +
              "– Free wifi\n" +
              "– Minibar\n" +
              "– Non-smoking room available\n" +
              "– Cable movie channel\n" +
              "– Tea & Coffee making\n" +
              "– Safety box\n" +
              "– Facility"
          );
        }
      });
    } else {
      setEdit(true);
    }
  }, [dispatch, token, id, userId, navigate]);

  const handleEdit = () => {
    setLoad(true);
    setEdit(true);
    setTimeout(function () {
      setLoad(false);
    }, 1000);
  };

  const onSubmit = (data) => {
    setLoad(true);
    if (id === "-1") {
      confirmAlert({
        title: "Xác nhận tạo mới",
        message: "Bạn có chắc muốn thêm mục này?",
        buttons: [
          {
            label: "Có",
            onClick: () => {
              dispatch(addRoom(data)).then((res) => {
                if (res?.payload?.statusCode === 200) {
                  successToast(res?.payload.msg);
                  navigate("/admin");
                } else {
                  errorToast(res?.payload.msg);
                }
              });
            },
          },
          {
            label: "Không",
            onClick: () => {},
          },
        ],
      });
    } else {
      dispatch(updateRoom({ body: data, id: id })).then((res) => {
        if (res?.payload?.statusCode === 200) {
          successToast(res?.payload.msg);
        } else {
          errorToast(res?.payload.msg);
        }
      });
    }
    setLoad(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        paddingTop: "190px",
      }}
    >
      {(room?.name && id !== -1) || id < 0 ? (
        <Form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <h1
              style={{
                fontSize: "40px",
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              {id !== "-1"
                ? "Thông tin phòng chi tiết"
                : "Thêm mới thông tin phòng"}
            </h1>
            <div className="pt-3">
              <Row>
                <Col xs={12} sm={12} lg={7} md={6}>
                  <Row className="mb-4">
                    <Form.Group as={Col}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tiêu đề"
                        name="name"
                        disabled={!edit}
                        {...register("name", {
                          value: `${room?.name ?? ""}`,
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.name?.message}
                      </Form.Text>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Type of Room</Form.Label>
                      <Form.Select
                        defaultValue={room?.type}
                        name="type"
                        disabled={!edit}
                        {...register("type")}
                      >
                        <option value="0">---Choose Type---</option>
                        <option value="delux">DELUXE ROOM</option>
                        <option value="predelux">PREMIUM DELUXE ROOM</option>
                        <option value="preminum">PREMIUM ROOM</option>
                        <option value="junior">JUNIOR SUITE</option>
                        <option value="executive">EXECUTIVE SUITE</option>
                        <option value="deluxsuite">DELUX SUITE</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Price (vnđ)</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Giá bán"
                        name="price"
                        disabled={!edit}
                        {...register("price", { value: `${room?.price ?? 0}` })}
                      />
                      <Form.Text className="text-danger">
                        {errors.price?.message}
                      </Form.Text>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={10}
                        placeholder="Nhập tiêu đề"
                        name="desc"
                        disabled={!edit}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                </Col>
                <Col xs={12} sm={12} lg={5} md={6}>
                  <div>
                    <Form.Group as={Col}>
                      <div className="d-flex justify-content-between">
                        <Form.Label>Thumbnail</Form.Label>
                      </div>
                      <Form.Control
                        type="file"
                        accept="image/**"
                        name="thumb"
                        disabled={!edit}
                      />
                      {id !== "-1" && (
                        <img
                          className="img-thumbnail"
                          src="https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/hanoi-hotel17942-1517.jpg"
                          alt="Preview"
                        />
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="ps-5 pe-5 pt-3">
            {edit ? (
              <Button
                className="w-100"
                variant="primary"
                type="submit"
                disabled={load || !edit}
              >
                {id !== "-1" ? "Save" : "Add"}
              </Button>
            ) : (
              <Button
                className="w-100"
                variant="primary"
                onClick={handleEdit}
                disabled={edit}
              >
                Edit
              </Button>
            )}
          </div>
        </Form>
      ) : (
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
      )}
    </div>
  );
};

export default Detail;
