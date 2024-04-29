import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";
import { BackgroundToggleProvider } from "./hooks/useBackgroundToggle";
import { Page } from "./Page";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundToggleProvider>
        <Page />
      </BackgroundToggleProvider>
    </QueryClientProvider>
  )
}

export default App
