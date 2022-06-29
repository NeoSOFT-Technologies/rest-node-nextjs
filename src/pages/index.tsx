import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import { ReactElement, useState } from "react";
import { useAppDispatch } from "../client/store/hooks";
import { getUserDetails } from "../client/store/login/slice";
import { ToastAlert } from "../client/components/toast-alert/toast-alert";
import styles from "../client/styles/Login.module.scss";
import RootState from "../client/store";
import type { NextPageWithLayout } from './_app'
export default function Login() {
  const [formData, setFormData] = useState({ userName: "", password: "" });

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

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await dispatch(getUserDetails({ ...formData }));
    const result = RootState.getState().login;
    if (result.data) {
      ToastAlert("LoggedIn successfully", "success");
      router.push("/settings");
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
Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <>{page}</>
    
  )
}