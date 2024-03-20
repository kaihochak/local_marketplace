import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string[];
  averageRating: number;
  totalReviews: number;
  url?: string;
  servicesOffered: { [key: string]: { title: string; price: string } };
  availabilityIDs?: string[]; 
  ratingReviewIDs?: string[]; 
  categories?: { _id: string; name: string }[];
  providers: { _id: string; name: string ; imageUrl: string }[];
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: [String], required: true },
  averageRating: { type: Number, required: true },
  totalReviews: { type: Number, required: true },
  url: { type: String },
  servicesOffered: { type: Schema.Types.Mixed },
  availabilityIDs: [{ type: String }], 
  ratingReviewIDs: [{ type: String }], 
  categories: [{
    _id: { type: String, required: true },
    name: { type: String, required: true }
  }],
  providers: [{
    _id: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true }
  }]
}, { timestamps: true });

const Service = models.Service || model<IService>('Service', ServiceSchema);

export type ServiceItem = {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  imageUrl: string[];
  averageRating: number;
  totalReviews: number;
  url?: string;
  servicesOffered: { [key: string]: { title: string; price: string } };
  availabilityIDs?: string[]; 
  ratingReviewIDs?: string[]; 
  categories?: { _id: string; name: string }[];
  providers: { _id: string; name: string ; imageUrl: string }[];
};

export default Service;
