import { useState } from "react";
import { MonoTitle } from "./MonoTitle"
import { SearchBar } from "./SearchBar";
import { MonoLink } from "./MonoLink";

interface PageContentProps {
  children: (filterValue?: string) => React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  const [filterValue, setFilterValue] = useState("")

  return (
    <div className="w-full h-full flex flex-col justify-stretch items-stretch">
      <div className="flex flex-col xs:flex-row justify-start items-stretch xs:justify-between xs:items-center px-[24px] py-[20px] gap-4">
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
      <div className="flex flex-row justify-center gap-2 py-2">
        <MonoLink href="https://discord.gg/7zUPfN4D6g">
          Discord
        </MonoLink>
        <MonoLink href="https://twitter.com/ar_io_network">
          Twitter
        </MonoLink>
        <MonoLink href="https://ar.io">
          Home (ar.io)
        </MonoLink>
      </div>
    </div>
  )
}
