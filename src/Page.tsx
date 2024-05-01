import { PageLayout } from "./components/PageLayout";
import { HeaderItems } from "./components/HeaderItems";
import { PageContent } from "./components/PageContent";
import { useBackgroundToggle } from "./hooks/useBackgroundToggle";
// import { TestN } from "./TestN"
import { config } from "./config";
import { LeaderboardDataLoader } from "./components/LeaderboardDataLoader";
import { TableVirtualizedInfiniteProp } from "./components/TableVirtualizedInfiniteProp";


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
        )}
      </PageContent>
    </PageLayout>
  )
}
