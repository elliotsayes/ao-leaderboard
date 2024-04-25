import { cn } from "@/lib/utils"
import React from "react"
import { Section } from "./Section";

export interface PageLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ header, className, ...props }, ref) => {
    return (
      <div
        className={cn("flex flex-col justify-stretch items-stretch gap-5 px-5 py-5", className)}
        ref={ref}
        {...props}
      >
        <Section className="flex pl-8 pr-6 py-3">
          {header}
        </Section>
        <Section className="flex">
          {props.children}
        </Section>
      </div>
    )
  }
)
PageLayout.displayName = "PageLayout"

export { PageLayout }
