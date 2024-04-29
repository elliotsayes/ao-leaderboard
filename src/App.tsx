import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";

import { PageLayout } from "./components/PageLayout";
import { HeaderItems } from "./components/HeaderItems";
import { PageContent } from "./components/PageContent";
// import { TestN } from "./TestN"
import { config } from "./config";
import { LeaderboardDataLoader } from "./components/LeaderboardDataLoader";
import { TableVirtualizedInfiniteProp } from "./components/TableVirtualizedInfiniteProp";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout header={<HeaderItems />}>
        <PageContent>
          {/* {() => <TestN />} */}
          {(filterValue) => (
            <LeaderboardDataLoader
              contractId={config.processIdLeaderboardContract}
            >
              {(data) => (
                <TableVirtualizedInfiniteProp
                  flatData={data}
                  filterText={filterValue}
                />
              )}
            </LeaderboardDataLoader>
          )}
        </PageContent>
      </PageLayout>
    </QueryClientProvider>
  )
}

export default App
