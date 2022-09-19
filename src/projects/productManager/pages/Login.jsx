import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../Api";
import { useAuth_Them } from "../contexts/Auth_Them";
import classes from "../styles.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user , toggleAuth } = useAuth_Them();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    LoginAPI({ email, password })
      .then((res) => {
        console.log(res.data);
        toggleAuth();
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
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.value)}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div>
                  <label htmlFor="password">گذرواژه</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.value)}
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
