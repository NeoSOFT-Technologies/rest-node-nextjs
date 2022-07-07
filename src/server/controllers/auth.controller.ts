import { NextApiRequest, NextApiResponse } from "next";
import authService from "../services/auth.service";

const authController = {
  login: async (req: NextApiRequest, res: NextApiResponse) => {
    const { userName, password }: { userName: string; password: string } = req.body;
    if (!userName || !password) { throw new Error("please provide userName and password both"); }
    const user = await authService.login({ userName, password });
    res.status(200).json({ ...user });
  }
}

export default authController
