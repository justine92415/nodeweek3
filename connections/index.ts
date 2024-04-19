import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE!.replace('<password>', process.env.DATABASE_PASSWORD!);

mongoose
  .connect(DB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB');
    console.log(error);
  });