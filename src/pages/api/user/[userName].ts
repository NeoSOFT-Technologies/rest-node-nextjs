import handler from "../../../server/utils/next-connect";
import userController from "../../../server/controllers/user.controllers";

handler
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default handler;
