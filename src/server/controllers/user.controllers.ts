import { NextApiRequest, NextApiResponse } from "next";
import userService from "../services/user.service";
const userController = {
  getAllUser: async (req: NextApiRequest, res: NextApiResponse) => {
    const user = await userService.getAllUser();
    res.status(200).json({ ...user });
  },
  getUser: async (req: NextApiRequest, res: NextApiResponse) => {
    const userName = req.query.userName as string
    if (!userName) { throw new Error("please provide userName "); }
    const user = await userService.getUser({ userName });
    res.status(200).json({ user });
  },
  createUser: async (req: NextApiRequest, res: NextApiResponse) => {
    const { userName, password, firstName, lastName, }: { userName: string; password: string; firstName: string; lastName: string; } = req.body;
    if (!userName || !password || !firstName || !lastName) { throw new Error("please provide all details"); }
    const user = await userService.createUser({ userName, password, firstName, lastName, });
    res.status(201).json({ user });
  },
  updateUser: async (req: NextApiRequest, res: NextApiResponse) => {
    const userName = req.query.userName as string
    // console.log(userName, "1");
    console.log(req.body, "this is body");
    const { firstName, lastName, }: { firstName: string; lastName: string; } = req.body;
    console.log(userName, firstName, lastName, "3");
    if (!userName || !firstName || !lastName) { throw new Error("data ia not updated"); }
    const user = await userService.updateUser({ userName, firstName, lastName });
    res.status(200).json({ user });
  },
  deleteUser: async (req: NextApiRequest, res: NextApiResponse) => {
    const userName = req.query.userName as string
    if (!userName) { throw new Error("data ia not found"); }
    const user = await userService.deleteUser({ userName });
    res.status(200).json({ user });
  }
}

export default userController
