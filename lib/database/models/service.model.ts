import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string;
  url?: string;
  providers: { _id: string, name: string }[]; 
  servicesOffered: Map<string, { title: string; price: string }>;
  ratingReviewIDs: string[]; 
  averageRating?: number;
  totalReviews?: number;
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: true },
  url: { type: String },
  providers: [{ type: String, ref: 'User' }],
  servicesOffered: {
    type: Map,
    of: {
      title: { type: String, required: true },
      price: { type: String, required: true }
    }
  },
  ratingReviewIDs: [{ type: String, ref: 'RatingReview' }],
  averageRating: { type: Number, required: false },
  totalReviews: { type: Number, required: false },
}, { timestamps: true }); // Enables createdAt and updatedAt fields automatically

const Service = models.Service || model('Service', ServiceSchema);

// type Service Item is not updated yet
// currently this is only for the frontend 
export type ServiceItem = {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  image: string[];
  averageRating: number;
  totalReviews: number;
  serviceProvider: {
    userId: string;
    name: string;
    imageUrl: string;
  }[];
  servicesOffered: {
    [key: string]: {
      title: string;
      price: string;
    };
  };
  ratingReviewIDs:string[],
};

export default Service;
