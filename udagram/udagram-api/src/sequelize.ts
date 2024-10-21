import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username.trim(),
  password: config.password.trim(),
  database: config.database.trim(),
  host: config.host.trim(),
  dialect: "postgres",
  storage: ":memory:",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});