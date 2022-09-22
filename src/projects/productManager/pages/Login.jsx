import { useRef } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../Api";
import { useAuth } from "../contexts/Auth";
import { useTheme } from "../contexts/theme";
import classes from "../styles.module.scss";

const Login = () => {
  const [error, setError] = useState("");
  const { theme } = useTheme();
  const { toggleAuth } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    LoginAPI({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then((res) => {
        console.log(res.data);
        toggleAuth(e.target[0].value);
        navigate("/product-manager/dashboard");
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err.response.data);
      });
  };
  console.log("Login");
  return (
    <div
      className={`${classes.page_wraper} ${
        theme.mode === "light" ? classes.light : classes.dark
      }`}
    >
      <div className={classes.login_page}>
        <div className={classes.card}>
          <div className={classes.card_body}>
            {error && <div>{error}</div>}
            <form onSubmit={handleLogin}>
              <div className={classes.row}>
                <div>
                  <label htmlFor="email">ایمیل</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    ref={emailRef}
                    required
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div>
                  <label htmlFor="password">گذرواژه</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    ref={passwordRef}
                    required
                    minLength={5}
                  />
                </div>
              </div>
              <button type="submit">ورود</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
