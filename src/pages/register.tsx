import { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import PasswordButtons from "../client/components/password-field/PasswordButtons";
import { ToastAlert } from "../client/components/toast-alert/toast-alert";
import {
  regexForName,
  regForPassword,
  regexForUserName,
} from "../client/resources/constants";
import RootState from "../client/store";
import { addNewUser } from "../client/store/register/slice";
import { useAppDispatch } from "../client/store/hooks";
import { IErrorUserInput, IRegisterDatas } from "../client/types/index";
import styles from "../client/styles/Register.module.scss";
import { useTranslation } from "react-i18next";
import LanguageChange from "../client/components/i18n/LanguageChange";
export default function Registration() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showPassword, setShowpassword] = useState(false);

  const [user, setUser] = useState<IRegisterDatas>({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    cnfpassword: "",
  });
  const [error, setError] = useState<IErrorUserInput>({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    cnfpassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
      case "lastName":
        setError({
          ...error,
          [name]: regexForName.test(value)
            ? ""
            : "Name should contains only Alphabets .",
        });
        break;
      case "userName":
        setError({
          ...error,
          [name]: regexForUserName.test(value)
            ? ""
            : "Name should only consist AlphaNumeric characters.",
        });
        break;

      case "password":
        setError({
          ...error,
          [name]: regForPassword.test(value)
            ? ""
            : "Password should contains minimum one Number,uppercase,lowercase,special Character (8-15).",
        });
        break;
      case "cnfpassword":
        setError({
          ...error,
          [name]:
            (user.cnfpassword = value) !== user.password
              ? "ConfirmPassword show match with Password"
              : "",
        });
        break;
    }
    setUser({ ...user, [name]: value });
  };
  const handleValidate = () => {
    return (
      !error.firstName &&
      !error.lastName &&
      !error.userName &&
      !error.password &&
      !error.cnfpassword
    );
  };
  console.log(handleValidate());
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const newuser = { ...user };
    delete newuser.cnfpassword;
    console.log(newuser);
    await dispatch(addNewUser({ ...newuser }));

    const result = RootState.getState().addNewUserState;
    //console.log(result)
    if (handleValidate()) {
      if (result.userAdded) {
        ToastAlert("LoggedIn successfully", "success");
        router.push("/");
      } else {
        ToastAlert("username already exists", "warning");
      }
    } else {
      ToastAlert("Incorrect credentials", "warning");
    }
  };

  return (
    <>
      <div className={styles.backgroundblue}>
        <div className={styles.center}>
          <Form
            onSubmit={handleSubmit}
            data-testid="form-input"
            className={styles.backgroudoffwhite}
          >
            <h1 className="text-center text-white pb-2 pt-3">
              {t("sign-up-clause")}
            </h1>
            <Row>
              <Col md="6">
                <Form.Group className="mb-3">
                  <Form.Control
                    className={styles.inputstyle}
                    type="text"
                    id="FirstName"
                    placeholder={t("firstname-placeholder")}
                    name="firstName"
                    data-testid="firstName-input"
                    value={user.firstName}
                    isInvalid={!!error.firstName}
                    isValid={!error.firstName && !!user.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {t("name-error")}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    className={styles.inputstyle}
                    id="LastName"
                    placeholder={t("lastname-placeholder")}
                    name="lastName"
                    data-testid="lastName-input"
                    value={user.lastName}
                    isInvalid={!!error.lastName}
                    isValid={!error.lastName && !!user.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {t("name-error")}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3">
                  <Form.Control
                    data-testid="userName-input"
                    type="text"
                    className={styles.inputstyle}
                    placeholder={t("username-placeholder")}
                    name="userName"
                    value={user.userName}
                    isValid={!error.userName && !!user.userName}
                    isInvalid={!!error.userName}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {t("username-error")}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder={t("password-placeholder")}
                      data-testid="password-input"
                      name="password"
                      className={styles.inputstyle}
                      onChange={handleInputChange}
                      value={user.password}
                      isValid={!error.password && !!user.password}
                      isInvalid={!!error.password}
                      required
                    />{" "}
                    <InputGroup.Text>
                      <PasswordButtons
                        viewPassword={showPassword}
                        setViewPassword={setShowpassword}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {t("password-error")}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder={t("cnfpassword-placeholder")}
                      data-testid="Cnfpassword-input"
                      name="cnfpassword"
                      className={styles.inputstyle}
                      onChange={handleInputChange}
                      value={user.cnfpassword}
                      isValid={!error.cnfpassword && !!user.cnfpassword}
                      isInvalid={!!error.cnfpassword}
                      required
                    />{" "}
                    <InputGroup.Text>
                      <PasswordButtons
                        viewPassword={showPassword}
                        setViewPassword={setShowpassword}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="d-block">
                    {t("cnfpassword-error")}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md="12">
                <div>
                  <button
                    className={styles.btn}
                    type="submit"
                    data-testid="submit-input"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> {t("sign-up-button")}
                  </button>

                  <button
                    className={`${styles.btn} ms-2`}
                    data-testid="signin-button"
                    type="button"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> {t("sign-in-button")}
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <LanguageChange />
      </div>
      {/* )} */}
    </>
  );
}
Registration.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
