import mockApi from "../../resources/testconfig";
import store from "../index";
import { addNewUser } from "./slice";

test("calling the state of add-tenant", async () => {
  mockApi.onPost("api/auth/register").reply(200, {});

  const result = await store.dispatch(
    addNewUser({
      firstName: "deepthi",
      lastName: "polsani",
      userName: "deepthi1",
      password: ""
    })
  );
  expect(result.type).toBe("register/user/fulfilled");
});

test("calling the state of add-tenant", async () => {
  mockApi.onPost("api/auth/register").reply(404);

  const result = await store.dispatch(
    addNewUser({
      firstName: "deepthi",
      lastName: "polsani",
      userName: "deepthi1",
      password: ""
    })
  );
  expect(result.type).toBe("register/user/rejected");
});