import mongoose from 'mongoose';

const mongoUri = 'mongodb://127.0.0.1:27017/auth-db';

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB is connected`);
  } catch (err) {
    console.error(err, ' Db error');
    process.exit(1);
  }
};

export default connectDb;
