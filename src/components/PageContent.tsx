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
      <div className="flex flex-col xs:flex-row justify-start items-stretch xs:justify-between xs:items-center xs:px-[24px] py-[20px] gap-4">
        <MonoTitle className="px-[14px] xxs:px-[24px] xs:px-0">
          EXP LEADERBOARD
        </MonoTitle>
        <div className="xxs:px-[10px] xs:px-0 ">
          <span className="text-title">
            <SearchBar value={filterValue} onChange={setFilterValue} />
          </span>
        </div>
      </div>
      {children(filterValue)}
    </div>
  )
}
