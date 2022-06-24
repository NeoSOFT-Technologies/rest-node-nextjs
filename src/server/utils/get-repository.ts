import connectDb from "../configs/connect-db";

const getRepo = async (repoName: string) => {
  const myDataSource = await connectDb();
  return myDataSource.getRepository(repoName);
};

export default getRepo;
