import handler from "../../../server/configs/next-connect";
import authCtrl from "../../../server/controllers/auth.controller";

export default handler.post(authCtrl.login);
