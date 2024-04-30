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
          className={cn("bg-cover bg-center flex flex-col justify-stretch items-center overflow-clip", altWallpaper ? 'bg-mush-dark' : 'bg-nebula-dark' , className)}
          ref={ref}
          {...props}
        >
          <div className="h-dvh w-dvw flex flex-col flex-grow justify-center items-stretch max-w-[1440px]">
            <div className="flex flex-col flex-grow max-h-[1024px] gap-5 px-5 py-5 lg:px-10 lg:pt-10 lg:pb-14 2xl:px-20 2xl:pt-20 2xl:pb-24">
              <Section className="px-4 xxs:px-8 py-3">
                {header}
              </Section>
              <Section className="flex-1 max-h-none">
                {props.children}
              </Section>
            </div>
          </div>
        </div>
        <link rel="preload" as="image" href="assets/wallpaper/nebula_dark.png" />
        <link rel="preload" as="image" href="assets/wallpaper/mush_dark.png" />
      </>
    )
  }
)
PageLayout.displayName = "PageLayout"

export { PageLayout }
