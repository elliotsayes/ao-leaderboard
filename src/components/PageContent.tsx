import { useState } from "react";
import { MonoTitle } from "./MonoTitle"
import { SearchBar } from "./SearchBar";

interface PageContentProps {
  children: (filterValue?: string) => React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  const [filterValue, setFilterValue] = useState("")

  return (
    <div className="w-full h-full flex flex-col justify-stretch items-stretch">
      <div className="flex flex-row justify-between items-center px-[24px] py-[20px]">
        <MonoTitle>
          EXP LEADERBOARD
        </MonoTitle>
        <div>
          <span className=" text-title">
            <SearchBar value={filterValue} onChange={setFilterValue} />
          </span>
        </div>
      </div>
      {children(filterValue)}
    </div>
  )
}
