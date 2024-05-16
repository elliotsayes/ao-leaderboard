import { PageLayout } from "./components/PageLayout";
import { HeaderItems } from "./components/HeaderItems";
import { PageContent } from "./components/PageContent";
import { useBackgroundToggle } from "./hooks/useBackgroundToggle";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
// const TableVirtualizedInfiniteProp = lazy(() => import("./components/TableVirtualizedInfiniteProp"))
// const LeaderboardDataLoader = lazy(() => import("./components/LeaderboardDataLoader"))
const Fixed = lazy(() => import("./Fixed"));

export function Page() {
  const { altBackground } = useBackgroundToggle()

  return (
    <PageLayout
      header={<HeaderItems />}
      altWallpaper={altBackground}
    >
      <PageContent>
        {(filterValue) => (
          <Suspense fallback={<LoadingSpinner />}>
            <Fixed addressFilter={filterValue} />
          </Suspense>
        )}
      </PageContent>
    </PageLayout>
  )
}
