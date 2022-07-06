import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import handler from "../../../server/configs/next-connect";
import userCtrl from "../../../server/controllers/user.controllers";

const secret = "secret key";

handler
  .use(async (req: NextApiRequest, res: NextApiResponse, next) => {
    const token = await getToken({ req, secret })
    if (token) {
      return next();
    }
    res.status(401).json({ msg: "unauthenticated user" });
  })
  .get(userCtrl.getUser)
  .post(userCtrl.createUser)
  .patch(userCtrl.updateUser)
export default handler;
