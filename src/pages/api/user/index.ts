

import handler from "../../../server/utils/next-connect";
import userController from "../../../server/controllers/user.controller";



handler

  .post(userController.createUser)

export default handler;
