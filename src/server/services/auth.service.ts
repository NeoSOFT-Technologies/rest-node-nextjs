import getRepo from "../utils/getRepo";

const authService = {
  login: async ({ userName, password, }: { userName: string; password: string; }) => {
    const userRepo = await getRepo("User");
    const user = await userRepo.findOne({ where: { userName, }, });
    if (!user) { throw new Error(`no user with ${userName} exists`); }
    if (user?.password !== password) { throw new Error("invalid credentials"); }
    return user;
  }
}

export default authService;
