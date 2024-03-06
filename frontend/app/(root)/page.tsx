import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between px-6 pt-6">
        <div>
          Search Bar
        </div>
        <div>
          Filters Button
        </div>
      </div>

      <div className="pl-6 py-6">
        <div>
          List of Filters
        </div>

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
      </div>
    </main>
  );
}
