import React, { useEffect, useState } from "react";
import { errorToast, successToast, warnToast } from "../../../utils/toastify";
import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../../utils/validate";
import { useDispatch } from "react-redux";
import "./index.css";
import { getUser, updateUser } from "../../../service/userSlice";
import { getLocalStorage } from "../../../utils/localStore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = getLocalStorage("id");
  const token = getLocalStorage("token");
  const [user, setUser] = useState();
  const [load, setLoad] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (!token) {
      warnToast("Bạn phải đăng nhập trước đã!");
      navigate("/");
    }
    dispatch(getUser(token)).then((res) => {
      if (res.payload?.statusCode === 200) {
        setUser(res.payload?.data);
      } else {
        errorToast(res.payload?.msg);
      }
    });
  }, [dispatch, navigate, token]);
  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };

  const onSubmit = async (data) => {
    setLoad(true);
    const newuser = {
      email: data.email,
      name: data.name,
      phone: data.phoneNum,
    };
    await dispatch(updateUser({ id: id, body: newuser })).then((res) => {
      if (res?.payload.statusCode === 200) {
        successToast(res?.payload?.msg);
        setLoad(false);
      } else {
        errorToast(res?.payload?.msg);
        setLoad(false);
      }
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(profileSchema),
  });
  return (
    <>
      {!user?.name ? (
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
        <div className="account_container">
          <div className="account_infor">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="my-3">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  disabled={!isEdit}
                  placeholder="Nhập tên người dùng"
                  name="name"
                  {...register("name", { value: `${user?.name ?? ""}` })}
                />
                <Form.Text className="text-danger">
                  {errors.name?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập email"
                  name="email"
                  disabled={!isEdit}
                  {...register("email", { value: `${user?.email ?? ""}` })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập số điện thoại"
                  name="phoneNum"
                  disabled={!isEdit}
                  {...register("phoneNum", { value: `${user?.phone ?? ""}` })}
                />
                <Form.Text className="text-danger">
                  {errors.phoneNum?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={load || !isEdit}
                  className="w-40%"
                >
                  Save
                </Button>
                <Button
                  variant="warning"
                  className="w-40%"
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
