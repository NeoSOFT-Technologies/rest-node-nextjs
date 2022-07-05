import { NextApiRequest, NextApiResponse } from "next";
import userService from "../services/user.service";
const userCtrl = {
 getUser : async (req: NextApiRequest, res: NextApiResponse) => {
  const { userName }: { userName: string; } =
    req.body;

  if (!userName ) {
    throw new Error("please provide userName ");
  }

  const user = await userService.getUser({ userName });
  res.status(200).json({ ...user });
},

createUser:async (req: NextApiRequest, res: NextApiResponse) => {
  
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

  const user = await userService.createUser({
    userName,
    password,
    firstName,
    lastName,
  });
  res.status(201).json({ ...user });
},

updateUser : async (req: NextApiRequest, res: NextApiResponse) => {
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

  const user = await userService.updateUser({ userName, firstName, lastName });
  res.status(200).json({ ...user });
},

deleteUser : async (req: NextApiRequest, res: NextApiResponse) => {
const userName=req.query.userName as string

  if (!userName ) {
    throw new Error("data ia not found");
  }

  const user = await userService.deleteUser({ userName });
  res.status(200).json({ ...user });
}
}

export default userCtrl
