import handler from "../../../../server/configs/next-connect";
import authController from "../../../../server/controllers/auth.controller";

export default handler.post(authController.register);
