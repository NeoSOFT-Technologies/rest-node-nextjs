
import connectDb from "../utils/connect-db";
import { User } from "../entities/user";
const authService = {
  login: async ({ userName, password, }: { userName: string; password: string; }) => {
    const dataSource = await connectDb();
    const userRepo = dataSource.getMongoRepository(User)
    const user = await userRepo.findOne({ where: { userName, }, });
    if (!user) { throw new Error(`no user with ${userName} exists`); }
    if (user?.password !== password) { throw new Error("invalid credentials"); }
    return user;
  }
}

export default authService;
