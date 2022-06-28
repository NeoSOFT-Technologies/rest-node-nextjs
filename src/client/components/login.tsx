import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { getUserDetails } from "../store/login/slice";
import { ToastAlert } from "./toast-alert/toast-alert";
import styles from "../styles/Login.module.scss";
import RootState from "../store";
//import KeepAlive, { useActivate } from 'react-activation'
export default function Login() {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const result = RootState.getState().login;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        setFormData({ ...formData, userName: value });
        break;
      case "password":
        setFormData({ ...formData, password: value });
        break;
      default:
        break;
    }
  };


 
  //console.log(result.data?.user.userName,"hii")
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await dispatch(getUserDetails({ ...formData }));
   
    if (result.data) {
      
      ToastAlert("LoggedIn successfully", "success");
      router.push("/dashboard");
    } else {
      ToastAlert("Incorrect credentials", "warning");
    }
  };

  return (
    <>
  
      <div className={styles.backgroundblue}>
        <Form className={styles.backgroudoffwhite}>
          <h4 className="text-center text-white">Login Page</h4>
          <Form.Group className="mb-3">
            <Form.Control
              className={styles.inputstyle}
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className={styles.inputstyle}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className="m-3  ">
            <button
              data-testid="signin-button"
              className={styles.btn}
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span> Login
            </button>

            <button
              data-testid="signin-button"
              className={`${styles.btn} ms-2`}
              onClick={() => {
                router.push("/register");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span> Register
            </button>
          </div>
        </Form>
      </div>
    
    </>
  );
}
