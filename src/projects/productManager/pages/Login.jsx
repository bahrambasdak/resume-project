import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../Api";
import { useAuth } from "../contexts/Auth";
import classes from "../styles.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {toggleAuth} = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    LoginAPI({ email, password })
      .then((res) => {
        console.log(res.data);
        toggleAuth();
        navigate('/product-manager/dashboard');
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err.response.data);
      });
  };
  return (
    <div className={classes.page_wraper}>
      <div className={classes.login_page}>
        <div className={classes.card}>
        {error && <div>{error}</div>}
          <form className={classes.card_body} onSubmit={handleLogin}>
         
          
            <label htmlFor="email">ایمیل</label>

            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.value)}
            />
            <label htmlFor="password">گذرواژه</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.value)}
            />
            <button type="submit">ورود</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
