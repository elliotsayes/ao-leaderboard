import { cn } from "@/lib/utils"
import React from "react"
import { Section } from "./Section";

export interface PageLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
  altWallpaper?: boolean;
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ header, altWallpaper, className, ...props }, ref) => {
    return (
      <div
        className={cn("h-screen flex flex-col justify-stretch items-stretch gap-5 px-5 py-5 bg-cover bg-center", altWallpaper ? 'bg-mushy-mush' : 'bg-cosmic-nodes' , className)}
        ref={ref}
        {...props}
      >
        <Section className="px-8 py-3">
          {header}
        </Section>
        <Section className="flex-1 max-h-none flex">
          {props.children}
        </Section>
      </div>
    )
  }
)
PageLayout.displayName = "PageLayout"

export { PageLayout }
