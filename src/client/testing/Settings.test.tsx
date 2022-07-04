import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store/index";

import UserProfile from "../../pages/settings";
import "../i18n/config";

it("render without crashing Loginpage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <UserProfile/>
      </Provider>
    </BrowserRouter>
  );
});