import { NextApiRequest, NextApiResponse } from "next";

import handler from "../../../server/utils/next-connect";
import userController from "../../../server/controllers/user.controllers";



handler
 
  .post(userController.createUser)

export default handler;
