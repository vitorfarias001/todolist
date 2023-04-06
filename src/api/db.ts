import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URL = 'mongodb+srv://admin:suasenha@cluster0.6n6xc6b.mongodb.net/?retryWrites=true&w=majority';
const MONGODB_PORT = 27017;

export interface MongooseConnectOptions extends Partial<ConnectOptions> {
  useNewUrlParser: true;
  useUnifiedTopology: true;
}

const connectDB = async (): Promise<typeof mongoose> => {
  try {
    const connection = await mongoose.connect(`${MONGODB_URL}:${MONGODB_PORT}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongooseConnectOptions);
    console.log('Connected to MongoDB');
    return connection;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    throw error;
  }
};

export default connectDB;
