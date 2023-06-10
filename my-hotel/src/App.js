import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./feature/home";
import Accomodation from "./feature/accomodation";
import Offer from "./feature/offer";
import Missing from "./feature/missing";
import Services from "./feature/services";
import Contact from "./feature/contact";
import Login from "./feature/login";
import Register from "./feature/register";
import Booking from "./feature/booking";
import Account from "./feature/account";
import Admin from "./feature/admin";
import Detail from "./feature/admin/detail";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accomodation" element={<Accomodation />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/*" element={<Missing />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/room/:id" element={<Detail />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
