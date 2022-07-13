import mockApi from "../../resources/testconfig";
import store from "../index";
import { getUserDetails } from "./slice";

test("calling the state of add-tenant", async () => {
  mockApi.onPost("api/auth/login").reply(200, {});

  const result = await store.dispatch(
    getUserDetails({
        userName: "deepthi",
        password: ""
    })
  );
  expect(result.type).toBe("login/user/fulfilled");
});

test("calling the state of add-tenant", async () => {
  mockApi.onPost("api/auth/login").reply(404);

  const result = await store.dispatch(
    getUserDetails({
        userName: "deepthi",
        password: ""
    })
  );
  expect(result.type).toBe("login/user/rejected");
});