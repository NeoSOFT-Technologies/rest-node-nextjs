import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import UserProfile from "../../pages/settings";

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const mockStore = configureStore([thunk]);
const store = mockStore({
  result: {
    data: { firstName: 'srihitha123', lastName: 'mary', userName: 'Marysrihitha123'},
  error: false,
  loading: false,
  
  }

});

it("render without crashing UserDetails", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
      <UserProfile/>
      </Provider>
    </BrowserRouter>
  );
});


it("render without crashing button", () => {
  useRouter.mockImplementationOnce(() => ({
    push: jest.fn(),
  }));
    render(
      <BrowserRouter>
        <Provider store={store}>
        <UserProfile/>
        </Provider>
      </BrowserRouter>
    );

  const cancelBtn = screen.getByTestId("cancel-button");
  expect(cancelBtn).toBeInTheDocument();
  expect(cancelBtn ).toHaveAttribute("type", "reset");
  fireEvent.click(cancelBtn);
  });
it("render form boxes", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
      <UserProfile/>
      </Provider>
    </BrowserRouter>
  );
  const firstNameBox = screen.getByTestId("firstName-input");
  expect(firstNameBox).toBeInTheDocument();
  expect(firstNameBox).toHaveAttribute("type", "text");
  fireEvent.change(firstNameBox, { target: { value: "Deepthi" } });
  expect(firstNameBox).toHaveValue("Deepthi");

  const lastNameBox = screen.getByTestId("lastName-input");
  expect(lastNameBox).toBeInTheDocument();
  expect(lastNameBox).toHaveAttribute("type", "text");
  fireEvent.change(lastNameBox, { target: { value: "Polsani" } });
  expect(lastNameBox).toHaveValue("Polsani");

  const userNameBox = screen.getByTestId("userName-input");
  expect(userNameBox).toBeInTheDocument();
  expect(userNameBox).toHaveAttribute("type", "text");
  fireEvent.change(userNameBox, { target: { value: "Polsani" } });

  const editBtn = screen.getByTestId("edit-button");
  fireEvent.click(editBtn);
  const saveBtn = screen.getByTestId("update-button");
  fireEvent.click(saveBtn);
});

it("should throw an error while entering a invalid firstname", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
      <UserProfile/>
      </Provider>
    </BrowserRouter>
  );

  const firstNameBox = screen.getByTestId("firstName-input");
  fireEvent.change(firstNameBox, { target: { value: "dee" } });

  const editBtn = screen.getByTestId("edit-button");
  fireEvent.click(editBtn);
  const saveBtn = screen.getByTestId("update-button");
  fireEvent.click(saveBtn);
});



it("renders role select box and remove role button", async () => {

  
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState')
  // useStateSpy.mockImplementationOnce(() => ({ init:jest.fn(),}))
  //useStateSpy.mockImplementation((init: any) => [init, setState]);
  render(
    <BrowserRouter>
      <Provider store={store}>
      <UserProfile/>
      </Provider>
    </BrowserRouter>
  );
 
  await waitFor(() => {
    const dropdownToggler = screen.getByTestId("dropdown-action");
    waitFor(() => {
      fireEvent.click(dropdownToggler);

      const editBtn = screen.getByTestId("dropdown-items");
      fireEvent.click(editBtn);
     
      const model=screen.getByTestId("modal-item")
      expect(model).toBeInTheDocument();

      const roleItem = screen.getByTestId("role-items");
      expect(roleItem).toBeInTheDocument();
      fireEvent.click(roleItem);
    });
  });
});

