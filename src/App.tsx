import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query";

import { TestN } from "./TestN"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestN />
    </QueryClientProvider>
  )
}

export default App
