import { cn } from "@/lib/utils"
import React from "react"

export interface MonoTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
}

const MonoTitle = React.forwardRef<HTMLParagraphElement, MonoTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("font-mono font-[400] text-[14px] leading-[18.2px] text-title text-nowrap", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
MonoTitle.displayName = "MonoTitle"

export { MonoTitle }
