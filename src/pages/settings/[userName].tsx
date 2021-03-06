import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col, Dropdown, Modal } from "react-bootstrap";
import { ToastAlert } from "../../client/components/toast-alert/toast-alert";
import { regexForName } from "../../client/resources/constants";
import {RootState } from "../../client/store";
import { updateUser } from "../../client/store/update/slice";
import { useAppDispatch, useAppSelector } from "../../client/store/hooks";
import { IErrorUserDetail, IUserDetail } from "../../client/types";
import { useRouter } from "next/router";
import { deleteUser } from "../../client/store/delete/slice";
import styles from "../../client/styles/Settings.module.scss";
import {userDetails} from "../../client/store/user-details/slice"
import Head from "next/head";
const UserProfile = () => {
 const userDetailsState = useAppSelector((state: RootState) => state.userDetailsState);
 const [edit, setEdit] = useState(false);
 const dispatch = useAppDispatch();
 const router = useRouter();
 const [deleteshow, setDeleteshow] = useState(false);
 const [User, setUser] = useState<IUserDetail>({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [error, setError] = useState<IErrorUserDetail>({
    firstName: "",
    lastName: "",
  });
  useEffect(() => {
    if (router.query.userName ){
     const userName: string =  router.query.userName.toString();
     dispatch(
        userDetails(
       userName
        )
      );
   }
  }, [dispatch, router.query, router.query.userName]);
  useEffect(() => {
   if (userDetailsState.data) setUser({ ...userDetailsState.data });
  }, [userDetailsState.data]);
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
        default:
        break;
    }
    setUser({ ...User, [name]: value });
  };
  const handleValidate = () => {
    return !error.firstName && !error.lastName;
  };
  const handleUpdateUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (handleValidate()) {
      console.log(User);
      dispatch(updateUser({ ...User }));
      setEdit(false);
    } else {
      ToastAlert("Incorrect credentials", "warning");
    }
  };

  const deleteUserData = async () => {
    dispatch(deleteUser(User.userName));
    setDeleteshow(false);
  };
  return (
    <>
       <Head>
        <title>Profile page</title>
        <meta  name="description"
              content=" Profile Page with CRUD operations of Next.ts Template application" />
      </Head>
      <div className={styles.backgroundblue}>
        <div>
          <div className={styles.dropdownitem}>
            <Dropdown className="d-inline-block">
              <Dropdown.Toggle
                className="btn-light "
                id="dropdown-basic"
                data-testid="dropdown-action"
              >
                Action
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setDeleteshow(true)}
                  data-testid="dropdown-items"
                >
                  Delete User
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Modal show={deleteshow} onHide={() => setDeleteshow(false)} data-testid="modal-item" centered>
            <Modal.Header closeButton>
              <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete account</Modal.Body>
            <Modal.Footer>
              <Button
                className="btn-danger"
                data-testid="role-items"
                onClick={() => deleteUserData()}
              >
                Remove
              </Button>
            </Modal.Footer>
          </Modal>

          <Form className={styles.backgroudoffwhite}>
            <h2 className="text-center pt-3 p-3 text-white">User Details </h2>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    data-testid="firstName-input"
                    type="text"
                    className={styles.inputstyle}
                    placeholder="Enter FirstName"
                    name="firstName"
                    onChange={handleInputChange}
                    value={User.firstName}
                    isInvalid={!!error.firstName}
                    isValid={!error.firstName && !!User.firstName}
                    disabled={!edit}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                  
                    type="text"
                    data-testid="lastName-input"
                    placeholder="Enter LastName"
                    name="lastName"
                    className={styles.inputstyle}
                    onChange={handleInputChange}
                    value={User.lastName}
                    isInvalid={!!error.lastName}
                    isValid={!error.lastName && !!User.lastName}
                    disabled={!edit}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    data-testid="userName-input"
                    placeholder="Enter UserName"
                    value={User.userName}
                    className={styles.inputstyle}
                    name="userName"
                    onChange={handleInputChange}
                    disabled
                  />
                </Form.Group>
              </Col>

              <div className="text-dark">
                {edit ? (
                  <button
                    data-testid="update-button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                      handleUpdateUser(event)
                    }
                    type="button"
                    className={styles.btn}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    data-testid="edit-button"
                    onClick={() => setEdit(true)}
                    className={styles.btn}
                    type="button"
                  >
                    Edit
                  </button>
                )}

                <button
                  data-testid="cancel-button"
                  className={`${styles.btn} ms-2`}
                  type="reset"
                  onClick={() => router.push("/dashboard")}
                >
                  Cancel
                </button>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
