import mockApi from "../../resources/testconfig";
import store from "../index";
import { updateUser } from "./slice";

test("calling the state of add-tenant", async () => {
  mockApi.onPatch("api/user").reply(200, {});

  const result = await store.dispatch(
    updateUser({
      firstName: "deepthi",
      lastName: "polsani",
      userName: "deepthi1"
    })
  );
  expect(result.type).toBe("User/update/fulfilled");
});

test("calling the state of add-tenant", async () => {
  mockApi.onPatch("api/user").reply(404);

  const result = await store.dispatch(
    updateUser({
      firstName: "deepthi",
      lastName: "polsani",
      userName: "deepthi1"
    })
  );
  expect(result.type).toBe("User/update/rejected");
});