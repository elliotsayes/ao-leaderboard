import { cn } from "@/lib/utils"
import React from "react"
import { MonoLink } from "./MonoLink";
import { ThemeToggle } from "./ThemeToggle";

export interface HeaderItemsProps
  extends React.HTMLAttributes<HTMLDivElement> {
}

const HeaderItems = React.forwardRef<HTMLDivElement, HeaderItemsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("w-full flex flex-row justify-between items-center", className)}
        ref={ref}
        {...props}
      >
        <div className="flex flex-row justify-start items-center gap-4">
          <MonoLink href="#" className="flex">
            Points
          </MonoLink>
          <div
            className="h-[16px] w-px bg-title/[32%]"
          />
          <MonoLink href="#" className="flex">
            Quests
          </MonoLink>
        </div>
        <ThemeToggle
          value={false}
          onValueChange={() => console.log("clicked")}
          scale={1.5}
        />
      </div>
    )
  }
)
HeaderItems.displayName = "HeaderItems"

export { HeaderItems }
