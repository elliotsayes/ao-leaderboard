import { cn } from "@/lib/utils"
import React from "react"

export interface MonoLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

const MonoLink = React.forwardRef<HTMLAnchorElement, MonoLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        className={cn("font-mono font-[500] text-[12px] leading-[15.6px] text-title", className)}
        target="_blank"
        referrerPolicy="no-referrer"
        ref={ref}
        {...props}
      />
    )
  }
)
MonoLink.displayName = "MonoLink"

export { MonoLink }
