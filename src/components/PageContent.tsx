import { MonoTitle } from "./MonoTitle"

interface PageContentProps {
  children: React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-stretch items-stretch">
      <div className="flex flex-row justify-between items-center px-[24px] py-[20px]">
        <MonoTitle>
          EXP LEADERBOARD
        </MonoTitle>
        <div>
          <span className=" text-title">
            {"<Search Bar>"}
          </span>
        </div>
      </div>
      {children}
    </div>
  )
}
