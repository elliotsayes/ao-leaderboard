import { cn } from "@/lib/utils"
import React from "react"
import { Section } from "./Section";
import { MonoLink } from "./MonoLink";

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
          <div className="h-dvh w-dvw flex flex-col flex-grow justify-center items-stretch max-w-[1024px]">
            <div className="flex flex-col flex-grow max-h-[1024px] px-2 pt-5 pb-4 lg:px-10 2xl:px-20 2xl:pt-20 2xl:pb-24">
              <Section className="px-4 xxs:px-8 py-3">
                {header}
              </Section>
              <Section className="mt-5 flex-1 max-h-none">
                {props.children}
              </Section>
              <div className="flex flex-row justify-center gap-2 pt-4">
                <MonoLink href="https://discord.gg/7zUPfN4D6g">
                  Discord
                </MonoLink>
                <MonoLink href="https://ar.io">
                  Home
                </MonoLink>
                <MonoLink href="https://twitter.com/ar_io_network">
                  Twitter
                </MonoLink>
              </div>
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
