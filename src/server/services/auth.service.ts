import { User } from "../entities/user";
import getRepo from "../utils/get-repository";

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const userRepo = await getRepo("User");
  const user = (await userRepo.findOne({
    where: {
      username,
    },
  })) as User;

  if (!user) {
    throw new Error(`no user with ${username} exists`);
  }

  if (user?.password !== password) {
    throw new Error("invalid credentials");
  }

  return user;
};

const regsiter = async ({
  username,
  password,
  firstName,
  lastName,
}: {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const userRepo = await getRepo("User");
  const userRegsitered = (await userRepo.findOne({
    where: {
      username,
    },
  })) as User;

  if (userRegsitered) {
    throw new Error(`user with ${username} already exists`);
  }

  const user = (await userRepo.create({
    username,
    password,
    firstName,
    lastName,
  })) as User;
  userRepo.save(user);
  return user;
};

export default { login, regsiter };
