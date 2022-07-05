import handler from "../../../server/configs/next-connect";
import userCtrl from "../../../server/controllers/user.controllers";

export default handler.delete(userCtrl.deleteUser);
