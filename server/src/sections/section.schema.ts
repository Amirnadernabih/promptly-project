import { Schema } from 'mongoose';

export const SectionSchema = new Schema({
  idea: { type: String, required: true },
  name: { type: String, required: true },
  html: { type: String, required: true },
});
