import { useRouter } from "next/router";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserDetails } from "../../store/login/slice";
import { ToastAlert } from "../../components/toast-alert/toast-alert";
import styles from "./Login.module.scss";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const dispatch = useAppDispatch();
  const router = useRouter();
  const userData = useAppSelector((root) => root.login);

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setFormData({ ...formData, username: value });
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
    const result = await dispatch(getUserDetails({ ...formData }));
    console.log(result);
    if (result.type === "login/user/fulfilled") {
      ToastAlert("LoggedIn successfully", "success");
      localStorage.setItem("accessToken", result.payload.accessToken);
      router.push("/");
    } else {
      ToastAlert("Incorrect credentials", "warning");
    }
  };

  useEffect(() => {
    if (userData.data) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="d-flex align-items-center auth px-0 mt-3 login">
        <div className="row w-100 mx-0 ">
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <Form className={styles.backgroudoffwhite}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <div className="mt-3">
                  <Button
                    data-testid="signin-button"
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    LogIn
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
