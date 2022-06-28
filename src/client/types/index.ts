


export interface LoginData {
 
 
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  _id:string
}
export interface LoginPageState {
  data?: LoginData;
  loading: boolean;
  error?: string;
}
export interface RegisterData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}
export interface RegisterDatas {
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
export interface IErrorUserDetail{
  firstName: string;
  lastName: string;
}
