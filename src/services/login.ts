import apiFactory from "../utils/api-factory";

export const validateUserLoginCredentials = async (credentials: any) => {
  const response = await apiFactory().post("api/auth/login", {
    username: credentials.username,
    password: credentials.password,
  });

  console.log("printing", response.data);
  return response.data;
};
