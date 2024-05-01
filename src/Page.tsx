import { PageLayout } from "./components/PageLayout";
import { HeaderItems } from "./components/HeaderItems";
import { PageContent } from "./components/PageContent";
import { useBackgroundToggle } from "./hooks/useBackgroundToggle";
import { config } from "./config";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
const TableVirtualizedInfiniteProp = lazy(() => import("./components/TableVirtualizedInfiniteProp"))
const LeaderboardDataLoader = lazy(() => import("./components/LeaderboardDataLoader"))

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
            <LeaderboardDataLoader
              contractId={config.processIdLeaderboardContract}
            >
              {(data) => (
                <TableVirtualizedInfiniteProp
                  flatData={data}
                  addressFilter={filterValue}
                />
              )}
            </LeaderboardDataLoader>
          </Suspense>
        )}
      </PageContent>
    </PageLayout>
  )
}
