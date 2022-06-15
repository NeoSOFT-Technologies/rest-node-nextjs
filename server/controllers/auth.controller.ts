import { NextApiRequest, NextApiResponse } from "next";
import authService from "../services/auth.service";
// import { User } from "../entities/user";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password }: { username: string; password: string } =
    req.body;

  if (!username || !password) {
    throw new Error("please provide username and password both");
  }

  const user = await authService.login({ username, password });
  res.status(200).json({ user });
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    username,
    password,
    firstName,
    lastName,
  }: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  } = req.body;

  if (!username || !password || !firstName || !lastName) {
    throw new Error("please provide all details");
  }

  const user = await authService.regsiter({
    username,
    password,
    firstName,
    lastName,
  });
  res.status(201).json({ user });
};

export default { login, register };
