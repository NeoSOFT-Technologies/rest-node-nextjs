import { DataSource } from "typeorm";
import dbconfig from "./db.config";

let dataSource: DataSource;

async function connectDb() {
  console.log("connecting to database");
  if (!dataSource) {
    console.log("connection is going to established");
    dataSource = dbconfig;
    try {
      await dataSource.initialize();
    } catch (error) {
      console.log(error);
    }
    console.log("connection established");
  }
  console.log(dataSource.isInitialized);
  return dataSource;
}

export default connectDb;
