import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  dbName: process.env.DB_Name,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
};
