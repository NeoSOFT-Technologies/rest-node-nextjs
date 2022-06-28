import { NextApiRequest, NextApiResponse } from "next";

import authService from "../services/auth.service";
const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userName, password }: { userName: string; password: string } =
    req.body;

  if (!userName || !password) {
    throw new Error("please provide userName and password both");
  }

  const user = await authService.login({ userName, password });
  res.status(200).json({ ...user });
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const {
    userName,
    password,
    firstName,
    lastName,
  }: {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
  } = req.body;

  if (!userName || !password || !firstName || !lastName) {
    throw new Error("please provide all details");
  }

  const user = await authService.regsiter({
    userName,
    password,
    firstName,
    lastName,
  });
  res.status(201).json({ ...user });
};

const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    userName,
    firstName,
    lastName,
  }: {
    userName: string;
    firstName: string;
    lastName: string;
  } = req.body;
  if (!userName || !firstName || !lastName) {
    throw new Error("data ia not updated");
  }

  const user = await authService.updateUser({ userName, firstName, lastName });
  res.status(200).json({ ...user });
};

const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
const userName=req.query.userName as string
  if (!userName ) {
    throw new Error("data ia not found");
  }

  const user = await authService.deleteUser({ userName });
  res.status(200).json({ ...user });
};

export default { login, register, updateUser ,deleteUser};
