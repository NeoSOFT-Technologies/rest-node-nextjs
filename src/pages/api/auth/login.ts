import handler from "../../../server/utils/next-connect";
import authController from "../../../server/controllers/auth.controller";

export default handler.post(authController.login);
