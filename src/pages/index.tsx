import { useRouter } from "next/router";
import { Form, InputGroup } from "react-bootstrap";
import { signIn, getCsrfToken, useSession } from 'next-auth/react';
import PasswordButtons from "../client/components/password-field/PasswordButtons";
import { ReactElement, useState } from "react";
import { useAppDispatch } from "../client/store/hooks";
import { getUserDetails } from "../client/store/login/slice";
import { ToastAlert } from "../client/components/toast-alert/toast-alert";
import styles from "../client/styles/Login.module.scss";
import RootState from "../client/store";
import { useTranslation } from "react-i18next";
import LanguageChange from "../client/components/i18n/LanguageChange";
import { ILoginData, LoginPageState } from "../client/types";
export default function Login() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [showPassword, setShowpassword] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();

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
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      userName: formData.userName,
      password: formData.password,
      callbackUrl: "/dashboard",
    });

    if (res?.status || res?.error) {
      const data: LoginPageState = {
        data: session?.userData as ILoginData,
        loading: false,
        error: res.error,
      }
      console.log("session", session);
      await dispatch(getUserDetails(data));
      if (res.ok) {
        ToastAlert("LoggedIn successfully", "success");
        router.push("/dashboard");
      } else {
        ToastAlert("Incorrect credentials", "warning");
      }
    }
  };

  return (
    <>
      <div className={styles.backgroundblue}>
        <div className={styles.center}>
          <Form className={styles.backgroudoffwhite}>
            <h4 className="text-center text-white">{t("sign-in-clause")}</h4>
            <Form.Group className="mb-3">
              <Form.Control
                className={styles.inputstyle}
                type="text"
                placeholder={t("username-placeholder")}
                name="userName"
                data-testid="userName-input"
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder={t("password-placeholder")}
                  data-testid="password-input"
                  name="password"
                  className={styles.inputstyle}
                  onChange={handleInputChange}
                  required
                />{" "}
                <InputGroup.Text>
                  <PasswordButtons
                    viewPassword={showPassword}
                    setViewPassword={setShowpassword}
                  />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div className="m-3  ">
              <button
                data-testid="signin-button"
                type="submit"
                className={styles.btn}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span> {t("sign-in-button")}
              </button>

              <button
                data-testid="signup-button"
                type="button"
                className={`${styles.btn} ms-2`}
                onClick={() => {
                  router.push("/register");
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span> {t("sign-up-button")}
              </button>
            </div>
          </Form>
        </div>
        <LanguageChange />
      </div>
    </>
  );
}
Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
