import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./index.scss";
import ThietKe from "./page/ThietKe";
import App from "./page/App";
import KichThuoc from "./page/KichThuoc";
import Test from "./page/Test";
import LoginPage from "./page/LoginPage";
import HoanThanh from "./page/HoanThanh";
import PhongNgu from "./page/PhongNgu";
import Home from "./page/Home";
import PhongKhach from "./page/PhongKhach";
import PhongBep from "./page/PhongBep";
import Profiles from "./page/Profiles";
import SignUpPage from "./page/SignUpPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";
import Dashboard from "./components/dashboard";
import { ManageProduct } from "./page/Staff/product";
// import { ToastContainer } from "react-toastify";
import News from "./page/News";
import { DetailedNews } from "./page/DetailedNews";
import Project from "./page/Project";
import DetailedProject from "./page/DetailedProject";
function Menu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/thietke" element={<ThietKe />}></Route>
        <Route path="/kichthuoc" element={<KichThuoc />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/hoanthanh" element={<HoanThanh />}></Route>
        <Route path="/phongngu" element={<PhongNgu />}></Route>
        <Route path="/trangchu" element={<Home />}></Route>
        <Route path="/phongkhach" element={<PhongKhach />}></Route>
        <Route path="/phongbep" element={<PhongBep />}></Route>
        <Route path="/profile" element={<Profiles />}></Route>
        <Route path="/SignUpPage" element={<SignUpPage />}></Route>
        <Route path="/xemtintuc" element={<DetailedNews />}></Route>
        <Route path="/duan" element={<Project />}></Route>
        <Route path="/duanchitiet" element={<DetailedProject />}></Route>
        <Route path="/tintuc" element={<News />}></Route>
        <Route
          path="/ForgotPasswordPage"
          element={<ForgotPasswordPage />}
        ></Route>

        <Route path="/dashboard">
          <Route path="staff" element={<Dashboard role={"STAFF"} />}>
            <Route path="product" element={<ManageProduct />}></Route>
          </Route>
          <Route path="admin" element={<Dashboard role={"ADMIN"} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
