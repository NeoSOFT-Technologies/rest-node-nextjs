import { User } from "../entities/user";
import getRepo from "../utils/get-repository";
const authService = {
 login :async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  const userRepo = await getRepo("User");
  const user = await userRepo.findOne({
    where: {
      userName,
    },
  });

  if (!user) {
    throw new Error(`no user with ${userName} exists`);
  }

  if (user?.password !== password) {
    throw new Error("invalid credentials");
  }

  return user;
},

regsiter : async ({
  userName,
  password,
  firstName,
  lastName,
}: {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const userRepo = await getRepo("User");

  const newuser = userRepo.create({
    userName,
    password,
    firstName,
    lastName,
  });
  const user = await userRepo.save(newuser);
  return user;
},

 updateUser :async ({
  userName,
  firstName,
  lastName,
}: {
  userName: string;
  firstName: string;
  lastName: string;
}) => {
  const userRepo = await getRepo(User);
  await userRepo.updateOne({ userName }, { $set: { firstName, lastName } });
  const user = await userRepo.findOne({ where: { userName } });
  return user;
},

 deleteUser : async ({
  userName,
  }: {
  userName: string;
  
}) => {
  const userRepo = await getRepo(User);
  
  return  userRepo.deleteOne({userName});
},
}
export default authService
