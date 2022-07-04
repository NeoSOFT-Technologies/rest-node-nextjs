import handler from "../../../../server/configs/next-connect";
import  userCtrl from "../../../../server/controllers/auth.controller";

export default handler.delete( userCtrl.deleteUser);
