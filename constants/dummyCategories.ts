import { ICategory } from "@/lib/database/models/category.model";

export const dummyCategories: ICategory[] = [
    "Home",
    "Personal",
    "Tech",
    "Advisory",
    "Creative",
    "Logistic",
    "Collab",
    "Health",
].map((category, index) => ({
    _id: index.toString(),
    name: category,
} as ICategory));
    
