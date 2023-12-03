import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    const connectionInstance = await mongoose.connect(
      `${config.mongoURI}/${config.dbName}`,
    );
    console.log(
      `MongoDB Connected! DB Host: ${connectionInstance.connection.host}`,
    );
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('MongoDB Error', error);
    process.exit(1);
  }
}

main();
