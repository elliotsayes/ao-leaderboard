import { cn } from "@/lib/utils"
import React from "react"

export interface MonoTableBodyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  highlight?: boolean;
}

const MonoTableBody = React.forwardRef<HTMLParagraphElement, MonoTableBodyProps>(
  ({ className, highlight, ...props }, ref) => {
    return (
      <p
        className={cn(`font-mono ${highlight === true ? "font-[600] text-[13px] leading-[24px] bg-gradient-to-r from-table-highlight-start via-table-highlight-via to-table-highlight-end inline-block text-transparent bg-clip-text" : "font-[400] text-[12px] leading-[15.6px] text-table"}`, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
MonoTableBody.displayName = "MonoTableBody"

export { MonoTableBody }
