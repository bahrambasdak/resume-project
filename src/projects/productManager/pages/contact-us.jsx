import { useAuthThem } from "../contexts/Auth_Them";
import classes from "../styles.module.scss";

const ContactUs = () => {
    const {user} = useAuthThem();
  return (
    <div
      className={`${classes.page_wraper} ${
        user.them === "light" ? classes.light : classes.dark
      }`}
    >
      <div className={classes.card_body}>
        <form action="#">
          <div className={classes.row}>
            <div>
              <label htmlFor="name">نام</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="email">رایانامه</label>
              <input type="email" />
            </div>
          </div>

          <div className={classes.user_message}>
            <label htmlFor="user_message">پیام شما</label>
            <textarea name="" id="user_message"></textarea>
          </div>
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
