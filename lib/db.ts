import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log('Already Connected');
    return;
  }
  if (connectionState === 2) {
    console.log('Connecting');
    return;
  }

  try {
    mongoose.connect(MONGO_URI!, {
      bufferCommands: false,
    });
    console.log('Connected');
  } catch (error) {
    console.log('Error in connecting to db: ', error);
    throw new Error('Error in connecting to db');
  }
};

export default connect;
