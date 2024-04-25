import { cn } from "@/lib/utils"
import React from "react"

export interface MonoTitleProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

const MonoTitle = React.forwardRef<HTMLAnchorElement, MonoTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        className={cn("font-mono font-[400] text-[14px] leading-[18.2px] text-title capitalize", className)}
        target="_blank"
        referrerPolicy="no-referrer"
        ref={ref}
        {...props}
      />
    )
  }
)
MonoTitle.displayName = "MonoTitle"

export { MonoTitle }
