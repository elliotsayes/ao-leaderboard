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
      <>
        <div
          className={cn("bg-cover bg-center flex flex-col justify-stretch items-center overflow-clip", altWallpaper ? 'bg-mushy-mush' : 'bg-cosmic-nodes' , className)}
          ref={ref}
          {...props}
        >
          <div className="h-dvh w-dvw flex flex-col justify-stretch items-stretch gap-5 px-5 py-5 max-w-screen-lg">
            <Section className="px-8 py-3">
              {header}
            </Section>
            <Section className="flex-1 max-h-none">
              {props.children}
            </Section>
          </div>
        </div>
        <link rel="preload" as="image" href="assets/wallpaper/2d80cc4e03baa6aeebbc0978ce747457dcd68296.webp" />
        <link rel="preload" as="image" href="assets/wallpaper/315d624e6712a8a636acea70231b2e3c5420391b.webp" />
      </>
    )
  }
)
PageLayout.displayName = "PageLayout"

export { PageLayout }
