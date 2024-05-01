import { cn } from "@/lib/utils"
import React, { Suspense, lazy } from "react"
import { MonoLink } from "./MonoLink";
// import { ThemeToggle } from "./ThemeToggle";
const ThemeToggle = lazy(() => import("./ThemeToggle"))

export interface HeaderItemsProps
  extends React.HTMLAttributes<HTMLDivElement> {
}

const HeaderItems = React.forwardRef<HTMLDivElement, HeaderItemsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("w-full flex flex-row justify-between items-center gap-4", className)}
        ref={ref}
        {...props}
      >
        <div className="flex flex-row justify-start items-center gap-6 xxs:gap-10">
          <a href="https://ar.io" target="_blank" referrerPolicy="no-referrer">
            <img src="assets/graphics/ar-io-header.png" width={25} className="logo transition-all" alt="AR.IO Logo" />
          </a>
          <div className="flex flex-row justify-start items-center gap-4">
            <MonoLink href="https://ar.io/experience">
              EXP
            </MonoLink>
            <div
              className="h-[16px] w-px bg-title/[32%]"
            />
            <MonoLink href="https://zealy.io/c/ar-io">
              Quests
            </MonoLink>
          </div>
        </div>
        <Suspense fallback={<div className="h-[26.5px]" />}>
          <ThemeToggle
            scale={1.2}
          />
        </Suspense>
      </div>
    )
  }
)
HeaderItems.displayName = "HeaderItems"

export { HeaderItems }
