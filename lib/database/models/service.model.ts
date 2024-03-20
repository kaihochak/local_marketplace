import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number; // Optimized to number for calculations
  isFree: boolean;
  url?: string;
  categoryId: Schema.Types.ObjectId;
  providerId: Schema.Types.ObjectId;
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  image: { type: [String], required: true },
  averageRating: { type: Number, required: true },
  totalReviews: { type: Number, required: true },
  serviceProvider: [{
    userId: { type: String, required: true },
    name: { type: String, required: true },
    imageURL: { type: String, required: true }
  }],
  servicesOffered: {
    type: Map,
    of: {
      title: { type: String, required: true },
      price: { type: String, required: true }
    }
  },
  ratingReviewIDs: [{ type: Schema.Types.ObjectId, ref: 'RatingReview' }]
}, { timestamps: true }); // Enables createdAt and updatedAt fields automatically

const Service = models.Service || model('Service', ServiceSchema);

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
    imageURL: string;
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
