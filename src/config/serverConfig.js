
import dotenv from "dotenv";

dotenv.config();

const mongoDBURL = process.env.DB_URL;

export { mongoDBURL };