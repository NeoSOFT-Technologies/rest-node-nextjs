import getRepo from "../utils/get-repository";
import connectDb from "../utils/connect-db";
import { User } from "../entities/user";

const dataSource = connectDb();

const userService = {
  getAllUser: async () => {
    const userRepo =  (await dataSource).getMongoRepository(User)
    
    return userRepo.find();
  
  },
  getUser: async ({ userName }: { userName: string; }) => {
    const userRepo =  (await dataSource).getMongoRepository(User)
   return userRepo.findOne({ where: { userName } });
   
  },
  createUser: async ({ userName, password, firstName, lastName }: { userName: string; password: string; firstName: string; lastName: string; }) => {
    const userRepo =  (await dataSource).getMongoRepository(User)
    const newuser = userRepo.create({ userName, password, firstName, lastName, });
    return  userRepo.save(newuser);
    
  },
  updateUser: async ({ userName, firstName, lastName }: { userName: string; firstName: string; lastName: string; }) => {
    const userRepo =  (await dataSource).getMongoRepository(User)
    await userRepo.updateOne({ userName }, { $set: { firstName, lastName } });
    return userRepo.findOne({ where: { userName } });
    
  },
  deleteUser: async ({ userName }: { userName: string; }) => {
    const userRepo =  (await dataSource).getMongoRepository(User)
    return userRepo.deleteOne({ userName });
  },
}
export default userService
