import handler from "../../../server/utils/next-connect";
import userController from "../../../server/controllers/user.controllers";

handler.get(userController.getAllUser).post(userController.createUser);

export default handler;
