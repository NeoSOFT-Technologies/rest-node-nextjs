import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import store from "../store/index";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Login from "../../pages/index";
import "../i18n/config";
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const mockStore = configureStore([thunk]);
const store = mockStore({
  result: {
    data: {_id: '62c3c8ce504ab9391c416b91', firstName: 'srihitha123', lastName: 'mary', userName: 'Marysrihitha123', password: ''},
  error: false,
  loading: false,
  
  }

});
it("render without crashing Loginpage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
});
it("render the input fields", () => {
  useRouter.mockImplementationOnce(() => ({
    push: jest.fn(),
  }));
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  );
  const userNameBox = screen.getByTestId("userName-input");
  expect(userNameBox).toBeInTheDocument();
  expect(userNameBox).toHaveAttribute("type", "text");

  const passwordBox = screen.getByTestId("password-input");
  expect(passwordBox).toBeInTheDocument();
  expect(passwordBox).toHaveAttribute("type", "password");

  const registerBtn = screen.getByTestId("signup-button");
  expect(registerBtn).toBeInTheDocument();
  expect(registerBtn).toHaveAttribute("type", "button");
  fireEvent.click(registerBtn);

  const loginBtn = screen.getByTestId("signin-button");
  expect(loginBtn ).toBeInTheDocument();
  expect(loginBtn ).toHaveAttribute("type", "submit");
  fireEvent.click(loginBtn);

  

  fireEvent.change(userNameBox, { target: { value: "deepthi123" } });
  expect(userNameBox).toHaveValue("deepthi123");

  fireEvent.change(passwordBox, { target: { value: "deepthi@123" } });
  expect(passwordBox).toHaveValue("deepthi@123");


  
  fireEvent.click(loginBtn);

});
it("should throw an error while entering a invalid firstname", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
      <Login />
      </Provider>
    </BrowserRouter>
  );

  const userNameBox = screen.getByTestId("userName-input");
  fireEvent.change(userNameBox, { target: { value: "deepthi123" } });

  const loginBtn = screen.getByTestId("signin-button");
 
  fireEvent.click(loginBtn);
});