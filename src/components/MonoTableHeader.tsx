import { cn } from "@/lib/utils"
import React from "react"

export interface MonoTableHeaderProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
}

const MonoTableHeader = React.forwardRef<HTMLParagraphElement, MonoTableHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("font-mono font-[400] text-[12px] leading-[15.6px] text-table-header", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
MonoTableHeader.displayName = "MonoTableHeader"

export { MonoTableHeader }
