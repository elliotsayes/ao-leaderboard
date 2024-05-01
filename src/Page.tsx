import { PageLayout } from "./components/PageLayout";
import { HeaderItems } from "./components/HeaderItems";
import { PageContent } from "./components/PageContent";
import { useBackgroundToggle } from "./hooks/useBackgroundToggle";
// import { TestN } from "./TestN"
import { config } from "./config";
import { LeaderboardDataLoader } from "./components/LeaderboardDataLoader";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
// import { TableVirtualizedInfiniteProp } from "./components/TableVirtualizedInfiniteProp";
const TableVirtualizedInfiniteProp = lazy(() => import("./components/TableVirtualizedInfiniteProp"))

export function Page() {
  const { altBackground } = useBackgroundToggle()

  return (
    <PageLayout
      header={<HeaderItems />}
      altWallpaper={altBackground}
    >
      <PageContent>
        {/* {(filterValue) => <TestN addressFilter={filterValue} /> } */}
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
