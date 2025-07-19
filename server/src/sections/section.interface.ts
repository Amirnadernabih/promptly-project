import { Document } from 'mongoose';

export interface Section extends Document {
  idea: string;
  name: string;
  html: string;
}
