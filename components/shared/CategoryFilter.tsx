"use client"

import { use, useEffect, useState } from "react";
import { HelpDesk } from "@/public/assets/icons/HelpDesk";
import { TableBell } from "@/public/assets/icons/TableBell";
import { Technical } from "@/public/assets/icons/Technical";
import { Professional } from "@/public/assets/icons/Professional";
import { Creative } from "@/public/assets/icons/Creative";
import { Logistic } from "@/public/assets/icons/Logistic";
import { Collaboratory } from "@/public/assets/icons/Collaboratory";
import { Clinic } from "@/public/assets/icons/Clinic";
import { Tools } from "@/public/assets/icons/Tools";
import Category, { ICategory } from "@/lib/database/models/category.model";

type CateogoryFilterProps = {
  categories: ICategory[];
  onCategorySelect: (categoryId: string) => void;
}

// rename categories to parentCategories
const CategoryFilter = ({ categories, onCategorySelect }: CateogoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommendations");

  // Icons for each category
  const icons: { [key: string]: JSX.Element } = {
    "Recommendations": <TableBell />,
    "Home": <Tools />,
    "Personal": <HelpDesk />,
    "Tech": <Technical />,
    "Advisory": <Professional />,
    "Creative": <Creative />,
    "Logistic": <Logistic />,
    "Collab": <Collaboratory />,
    "Health": <Clinic />
  }

  // Handle category selection, sending the category id to the parent component
  const handleSelectCategory = (category: { _id: string, name: string }) => {
    setSelectedCategory(category.name);
    onCategorySelect(category._id);
  };

  // Filter card component
  const FilterCard = ({ category }: { category: { _id: string, name: string } }) => {
    return (
      // each card has the same width
      <div onClick={() => handleSelectCategory(category)}
        className={`hover-scale category-filter-card ${category.name === selectedCategory ? "bg-secondary" : "bg-transparent hover:bg-secondary-light shadow-none"}`}>
        <div className="h2-bold">{icons[category.name]}</div>
        <div className="p6-regular h-[20%] text-[16px] text-center leading-4 tracking-wide">{category._id === "recommendations"? "All" : category.name}</div>
      </div>
    )
  }

  // For "recommentdationnns"
  return (
    <div className="flex pt-3 pb-2 pl-4 pr-0 overflow-x-auto gap-x-2 scrollbar-hide">
      {categories.map(category => (
        <FilterCard key={category._id} category={category} />
      ))}
    </div>
  )
}

export default CategoryFilter;