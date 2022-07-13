import { EntityTarget } from "typeorm";
import connectDb from "../configs/connect-db";
import { User } from "../entities/user";

export type _User = EntityTarget<User>;

const getRepo = async (repoName: _User) => {
  const myDataSource = await connectDb();
  return myDataSource.getMongoRepository(repoName);
};

export default getRepo;
