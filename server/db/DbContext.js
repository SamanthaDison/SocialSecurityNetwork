import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PostSchema } from "../models/Post";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');

  Posts = mongoose.model('Posts', PostSchema);
}

export const dbContext = new DbContext()
