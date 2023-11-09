import { NavLink } from "react-router-dom";
import React , { useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState("Log Out");

  return (
    <header className="header">
      <NavLink className="brand-logo" to="/home">
        <div className="logo">
          <div className="dots">
            <div className="first-dot">■</div>
            <div>■</div>
            <div>■</div>
            <div>■</div>
          </div>
        </div>
        <div className="brand-name">
          <p>shophub</p>
        </div>
      </NavLink>
      <nav>
        <div className="nav-links">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
          <a className="nav-link">Blog</a>
          <a className="nav-link">Contact</a>
          <NavLink
            className="nav-link active"
            to="/login"
            aria-current="page"
            onClick={() => {
              isLogin === "Log Out"
                ? setIsLogin("Log In")
                : setIsLogin("Log Out");
            }}
          >
            {isLogin}
          </NavLink>
          {/* <a className="nav-link">SignUp</a> */}
          <a className="nav-link">My Account</a>
          <div className="cart">
            <div className="cart-icon">
              <a className="cart-button" href="/cart">
                <span aria-label="shopping cart" role="img">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shopping-bag"
                    className="svg-inline--fa fa-shopping-bag fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
