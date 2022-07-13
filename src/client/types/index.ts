export interface ILoginData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  _id:string
}
export interface LoginPageState {
  data?: ILoginData;
  loading: boolean;
  error?: string;
}
export interface IRegisterData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}
export interface IRegisterDatas {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  cnfpassword?: string;
}

export interface IErrorUserInput {
  firstName: string;
  lastName: string;
  userName?: string;
  password?: string;
  cnfpassword?: string;
}

export interface IUserDetail{
  firstName: string;
  lastName: string;
  userName: string;
}
export interface IUpdateUser{
  firstName: string;
  lastName: string;
}

export interface IErrorUserDetail{
  firstName: string;
  lastName: string;
}
