import apiFactory from "../utils/api-factory";
import { IRegisterData, IUpdateUser } from "../types/index";

// login auth
export const userLoginService = async (credentials: any) => {
  const response = await apiFactory().post("api/auth/login", { userName: credentials.userName, password: credentials.password, });
  console.log("printing", response.data);
  return response.data;
};
// create a new user
export function createNewUserService(data: IRegisterData) {
  console.log(data);
  return apiFactory().post("api/user", data);
}
// get all users data
export function getAllUsersService(userName: string) {
  return apiFactory().get(`api/user`);
}
// get a user data
export function getUserService(userName: string) {
  return apiFactory().get(`api/user/${userName}`);
}
// update a user data
export function updateUserDataService(userName: string, data: IUpdateUser) {
  const body = { ...data };
  console.log(body);
  return apiFactory().patch(`api/user/${userName}`, body);
}
// delete a user
export function deleteUserDataService(userName: string) {
  return apiFactory().delete(`api/user/${userName}`);
}