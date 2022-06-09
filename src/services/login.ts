import apiFactory from "../utils/api-factory";

export const validateUserLoginCredentials = async (credentials: any) => {
  const response = await apiFactory().post("api/", {
    path: "login",
    username: credentials.username,
    password: credentials.password,
  });
  return response.data;
};
