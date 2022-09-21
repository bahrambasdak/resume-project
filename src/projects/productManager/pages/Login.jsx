import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../Api";
import { useAuthThem } from "../contexts/Auth_Them";
import classes from "../styles.module.scss";

const Login = () => {
  const [input, setInput] = useState({});
  const [error, setError] = useState("");
  const { user, toggleAuth } = useAuthThem();
  const navigate = useNavigate();

  if (user.loggedIn) toggleAuth("");

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    LoginAPI({ input })
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
  return (
    <div
      className={`${classes.page_wraper} ${
        user.them === "light" ? classes.light : classes.dark
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
                    value={input.email}
                    onChange={handleInput}
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
                    value={input.password}
                    onChange={handleInput}
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
