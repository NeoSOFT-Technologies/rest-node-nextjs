import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import handler from "../../../server/utils/next-connect";
import userController from "../../../server/controllers/user.controllers";

const secret = "secret key";

handler
.get(userController.getUser)
  .use(async (req: NextApiRequest, res: NextApiResponse, next) => {
    const token = await getToken({ req, secret })
    if (token) {
      return next();
    }
    res.status(401).json({ msg: "unauthenticated user" });
  })
 
  .delete(userController.deleteUser)
  .patch(userController.updateUser)
export default handler;
