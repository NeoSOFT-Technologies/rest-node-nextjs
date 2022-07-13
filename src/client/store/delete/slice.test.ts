import mockApi from "../../resources/testconfig";
import store from "../index";
import { deleteUser } from "./slice";

test("calling the state of add-tenant", async () => {
  mockApi.onDelete("api/user/deepthi").reply(200, {});

  const result = await store.dispatch(
    deleteUser("deepthi")
  );
  expect(result.type).toBe("User/deleteUser/fulfilled");
});

test("calling the state of add-tenant", async () => {
  mockApi.onDelete("api/user/deepthi").reply(404);

  const result = await store.dispatch(
    deleteUser("deepthi")
  );
  expect(result.type).toBe("User/deleteUser/rejected");
});