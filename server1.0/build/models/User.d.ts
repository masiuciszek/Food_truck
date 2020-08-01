import mongoose from 'mongoose';
import { User } from './documents';
declare const userModel: mongoose.Model<User, {}>;
export { userModel };
