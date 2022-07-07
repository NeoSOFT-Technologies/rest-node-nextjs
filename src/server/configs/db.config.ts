import { DataSource } from "typeorm";
import { User } from "../entities/user";

const dbconfig: DataSource = new DataSource({
    type: "mongodb",
    host: process.env.DB_HOST || "localhost",
    port: 27017,
    database: process.env.DB_NAME || "nextjs-datebase",
    useNewUrlParser: true,
    logging: true,
    synchronize: true,
    // add entities here.
    entities: [User],
});

export default dbconfig;