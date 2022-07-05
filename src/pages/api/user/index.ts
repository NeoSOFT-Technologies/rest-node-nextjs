import handler from "../../../server/configs/next-connect";
import userCtrl from "../../../server/controllers/user.controllers";
handler

  .get(userCtrl.getUser)
  .post(userCtrl.createUser)
  .patch(userCtrl.updateUser);
export default handler;
