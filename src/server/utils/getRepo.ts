import connectDb from "../configs/connect-db";

const getRepo = async (repoName: string) => {
  const dataSource = await connectDb();
  return dataSource.getMongoRepository(repoName);
};

export default getRepo;
