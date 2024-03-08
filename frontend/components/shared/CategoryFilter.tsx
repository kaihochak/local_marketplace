"use client"

// import { getAllCategories } from "@/lib/actions/category.actions";
// import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CarbonHelpDesk } from "@/public/assets/icons/CarbonHelpDesk";

const CategoryFilter = () => {
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

  
  const FilterCard = ({ category }: { category: string }) => {
    return (
      // each card has the same width
      <div className="flex flex-col p-2 bg-primary rounded-md cursor-pointer min-w-[80px] min-h-[110px] place-items-center justify-end pb-5 gap-y-2 ">
        <div className="text-[32px]">{icons[category]}</div>
        <div className="h-[20%] text-[14px] text-center leading-4 tracking-tighter">{category}</div>
      </div>
    )
  }

  return (
    <div className="flex gap-x-4 pr-10 overflow-x-auto scrollbar-hide">
      <FilterCard category="All" />
      {categories.map(category => (
        <FilterCard key={category._id} category={category.name} />
      ))}
    </div>
  )
}

export default CategoryFilter;