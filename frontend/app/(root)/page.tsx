import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import FilterButton from "@/components/shared/FilterButton";
import CategoryGroup from "@/components/shared/CategoryFilter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="flex justify-between px-6 pt-6">
        <Search/>
        <FilterButton/>
      </section>

      <section className="pl-6 py-6">
        <CategoryGroup/>

        <div className="flex flex-col gap-y-4">
          <Collection title={"Recommendations"}/>
          <Collection title={"Home and repair"}/>
          <Collection title={"Personal"}/>
          <Collection title={"Tech"}/>
          <Collection title={"Professional"}/>
          <Collection title={"Creative"}/>
          <Collection title={"Logistic"}/>
          <Collection title={"Collaborative"}/>
          <Collection title={"Health"}/>
        </div>
      </section>
    </>
  );
}
