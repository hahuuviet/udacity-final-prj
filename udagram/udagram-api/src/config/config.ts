import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_bucket: process.env.AWS_BUCKET,
  port: Number(process.env.PORT),
  db_port: Number(process.env.POSTGRES_PORT),
  rds_dialect: process.env.RDS_DIALECT,
  url: process.env.URL,
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
