import apiFactory from "../utils/api-factory";
import { RegisterData,IUserDetail } from "../types/index";
export const validateUserLoginCredentials = async (credentials: any) => {
  const response = await apiFactory().post("api/auth/login", {
    userName: credentials.userName,
    password: credentials.password,
  });

  console.log("printing", response.data);
  return response.data;
};

export function createNewUser(data: RegisterData) {
  console.log(data);
  return apiFactory().post("api/auth/register", data);
}

export function updateUserData(data: IUserDetail) {
  const body = {
  ...data
  };
  return apiFactory().patch("api/auth/update", body);
}

export function deleteUserData(userName:string) {
 
  return apiFactory().delete(`api/auth/delete/${userName}`);
}