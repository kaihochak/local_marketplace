"use client"

// import { getAllCategories } from "@/lib/actions/category.actions";
// import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CarbonHelpDesk } from "@/public/assets/icons/CarbonHelpDesk";

const CategoryFilter = ({onCategorySelect}: {onCategorySelect: (category: string) => void}) => {
  const [categories, setCategories] = useState<{_id: string; name: string}[]>([
    {_id: "1", name: "Home"},
    {_id: "2", name: "Personal"},
    {_id: "3", name: "Tech"},
    {_id: "4", name: "Advisory"},
    {_id: "5", name: "Creative"},
    {_id: "6", name: "Logistic"},
    {_id: "7", name: "Collab"},
    {_id: "8", name: "Health"}
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    // const getCategories = async () => {
    //   const categoryList = await getAllCategories();

    //   categoryList && setCategories(categoryList as ICategory[])
    // }

    // getCategories();
  }, [])

  // const onSelectCategory = (category: string) => {
  //     let newUrl = '';

  //     if(category && category !== 'All') {
  //       newUrl = formUrlQuery({
  //         params: searchParams.toString(),
  //         key: 'category',
  //         value: category
  //       })
  //     } else {
  //       newUrl = removeKeysFromQuery({
  //         params: searchParams.toString(),
  //         keysToRemove: ['category']
  //       })
  //     }

  //     router.push(newUrl, { scroll: false });
  // }

  const icons: { [key: string]: JSX.Element } = {
    "All": <CarbonHelpDesk />,
    "Home": <CarbonHelpDesk />,
    "Personal": <CarbonHelpDesk />,
    "Tech": <CarbonHelpDesk />,
    "Advisory": <CarbonHelpDesk />,
    "Creative": <CarbonHelpDesk />,
    "Logistic": <CarbonHelpDesk />,
    "Collab": <CarbonHelpDesk />,
    "Health": <CarbonHelpDesk />
  }


  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    if (category == "All") { category = "Recommendations" }
    onCategorySelect(category);
  };

  const FilterCard = ({ category }: { category: string }) => {
    return (
      // each card has the same width
      <div onClick={() => handleSelectCategory(category)}  
          className={`flex flex-col p-2 pb-6 gap-y-2 rounded-md cursor-pointer min-w-[80px] sm:min-w-[200px] min-h-[110px] sm:min-h-[250px] place-items-center justify-end 
                    ${category === selectedCategory ? " bg-accent-light" : "bg-primary"}`}>
          <div className="text-[32px]">{icons[category]}</div>
        <div className="h-[20%] text-[16px] text-center leading-4 tracking-tighter">{category}</div>
      </div>
    )
  }

  return (
    <div className="flex gap-x-2 pr-10 pb-4 overflow-x-auto scrollbar-hide">
      <FilterCard category="All" />
      {categories.map(category => (
        <FilterCard key={category._id} category={category.name} />
      ))}
    </div>
  )
}

export default CategoryFilter;