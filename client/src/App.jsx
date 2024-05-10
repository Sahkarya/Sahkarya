import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import About from "./pages/About";
import { Concern } from "./pages/Concern";
import Login from "./pages/Login";
import RegistrationForm from "./pages/Register";
import Footer from "./components/Footer";
import { Admin } from "./pages/Admin";
import { Logout } from "./pages/Logout";
import { adminLoader } from "./pages/Admin";
import UserProfile from "./pages/UserProfile";
import FirePage from "./pages/FirePage";
import WaterPage from "./pages/WaterPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/fire" element={<FirePage />} />
      <Route path="/pipe" element={<WaterPage />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/concern" element={<Concern />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} loader={adminLoader} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/profile" element={<UserProfile />} />
    </>
  )
);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />

      <Footer />
    </>
  );
}
export default App;
