import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";

import { TestN } from "./TestN"
import { PageLayout } from "./components/PageLayout";
import { HeaderItems } from "./components/HeaderItems";
import PageContent from "./components/PageContent";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout header={<HeaderItems />}>
        <PageContent>
          <TestN />
        </PageContent>
      </PageLayout>
    </QueryClientProvider>
  )
}

export default App
