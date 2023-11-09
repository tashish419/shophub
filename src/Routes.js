import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import App from "./App";
import Cart from "./Cart";
import { useSelector } from "react-redux";

function AppRoutes() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<App />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;
