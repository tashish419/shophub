import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";
import { Action } from "./redux/store";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const navigate = useNavigate();

  const login = () => {
    if (!username || !password) {
      alert("Please enter email or password.");
    }
    const body = JSON.stringify({
      username: username,
      password: password
    });
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: body
    })
      .then((res) => res.json())
      .then((json) => {
        navigate("/home");
        dispatch({
          type: Action.LOGIN,
          token: json.token
        });
      })
      .catch((error) => {
        setTimeout(() => {
          navigate("/home");
          dispatch({
            type: Action.LOGIN,
            token: "abc"
          });
        }, 3000);
      });
  };
  return (
    <div class="login-wrapper ">
      <div>
        {" "}
        <form
          class="common-background"
          onSubmit={(event) => {
            event.preventDefault();
            login();
          }}
        >
          <h2>Login</h2>
          <label for="email">Username:</label>
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            id="username"
            name="username"
            placeholder="Please enter username"
            value={username}
          />
          <label for="password">Password:</label>
          <div class="eye">
            <input
              onInput={(event) => setPassword(event.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Please enter password"
              value={password}
            />
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="eye-slash"
                class="svg-inline--fa fa-eye-slash fa-w-20 icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                ></path>
              </svg>
            </i>
          </div>
          <button class="loginButton">Login</button>
        </form>
      </div>
    </div>
  );
}
