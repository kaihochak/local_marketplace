import { Document, Schema, model, models } from "mongoose";

// Define a TypeScript type for external use (e.g., API responses)
export type UserItem = {
  _id: string;
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageURL: string;
  website: string; 
  location: string;
  contactNumber: string;
  serviceIDs: string[]; // Assuming conversion to string IDs for external use
  ratingReviewIDs: string[]; // Assuming conversion to string IDs for external use
};

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imageURL: { type: String, required: true },
  website: { type: String, required: true },
  location: { type: String, required: true },
  contactNumber: { type: String, required: true, unique: true },
  serviceIDs: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  ratingReviewIDs: [{ type: Schema.Types.ObjectId, ref: 'RatingReview' }],
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const User = models.User || model('User', UserSchema);

export default User;
