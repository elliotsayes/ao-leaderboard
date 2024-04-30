import { cn } from "@/lib/utils"
import React from "react"

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("bg-section-backdrop/[85%] py-[5px] px-[11px] border-section-border/[32%] border-[0.5px] rounded-[6px]", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
