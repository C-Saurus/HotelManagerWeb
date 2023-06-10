import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStore";
import { deleteRoom, getRoom } from "../../service/roomThunk";
import { confirmAlert } from "react-confirm-alert";
import { Button, Spinner } from "react-bootstrap";
import { errorToast, successToast, warnToast } from "../../utils/toastify";

const Admin = () => {
  const token = getLocalStorage("token") ?? undefined;
  const userId = getLocalStorage("id") ?? undefined;
  const [room, setRoom] = useState();
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      warnToast("Bạn phải đăng nhập trước đã!");
      navigate("/");
    }
    dispatch(getRoom()).then((res) => {
      if (res.payload?.statusCode === 200) {
        setRoom(res.payload?.data);
      } else {
        errorToast(res.payload?.msg);
      }
    });
  }, [dispatch, navigate, token]);
  const handleAdd = (id) => {
    navigate(`/admin/room/${id}`);
  };
  const handleView = (id) => {
    navigate(`/admin/room/${id}`);
  };

  function handleDelete(id) {
    confirmAlert({
      title: "Xác nhận xóa",
      message: "Bạn có chắc muốn xóa mục này?",
      buttons: [
        {
          label: "Có",
          onClick: () => {
            setLoad(true);
            dispatch(deleteRoom(id)).then((res) => {
              if (res?.payload?.statusCode === 200) {
                successToast(res?.payload?.msg);
              } else {
                errorToast(res?.payload?.msg);
              }
            });
            navigate(0);
          },
        },
        {
          label: "Không",
          onClick: () => {},
        },
      ],
    });
  }
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        minHeight: "87vh",
        paddingTop: "190px",
        paddingLeft: "140px",
        paddingRight: "140px",
      }}
    >
      {room ? (
        <div className="container">
          <div className="row">
            <h1
              style={{
                fontSize: "40px",
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              Danh sách phòng trong khách sạn
            </h1>
          </div>
          <button
            className="btn btn-primary w-100 mb-3"
            onClick={() => handleAdd(-1)}
          >
            Thêm mới
          </button>
          {room.length <= 0 ? (
            <h1 style={{ textAlign: "center", paddingTop: "25%" }}>
              Danh sách đang trống
            </h1>
          ) : (
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Price</th>
                  {userId === "64439d609eeb0d26361c2e02" ? (
                    <th>Action</th>
                  ) : (
                    <></>
                  )}
                </tr>
              </thead>
              <tbody>
                {room.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.isRent ? "Rented" : "Available"}</td>
                    <td>{item.price} vnđ</td>
                    {userId === "64439d609eeb0d26361c2e02" ? (
                      <td>
                        <Button
                          onClick={() => handleView(item._id)}
                          variant="warning"
                          disabled={load}
                          className="me-2"
                        >
                          Chi tiết
                        </Button>
                        <Button
                          onClick={() => handleDelete(item._id)}
                          variant="danger"
                          disabled={load}
                        >
                          Xóa
                        </Button>
                      </td>
                    ) : (
                      <></>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
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

export default Admin;
