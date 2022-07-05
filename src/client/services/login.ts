import apiFactory from "../utils/api-factory";
import { IRegisterData,IUserDetail } from "../types/index";
export const userLoginService = async (credentials: any) => {
  const response = await apiFactory().post("api/auth/login", {
    userName: credentials.userName,
    password: credentials.password,
  });

  console.log("printing", response.data);
  return response.data;
};

export function createNewUserService(data: IRegisterData) {
  console.log(data);
  return apiFactory().post("api/user", data);
}

export function updateUserDataService(data: IUserDetail) {
  const body = {
  ...data
  };
  return apiFactory().patch("api/user", body);
}

export function deleteUserDataService(userName:string) {
 
  return apiFactory().delete(`api/user/${userName}`);
}