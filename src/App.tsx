// import ContractData from "../fixtures/leaderboards/contract_gAC5hpUPh1v-oPJLnK3Km6-atrYlvI271bI-q0yZOnw.json"
// import Gen100Data from "../fixtures/leaderboards/gen_100.json"
import Gen100KData from "../fixtures/leaderboards/gen_100K.json"
// import Gen1MData from "../fixtures/leaderboards/gen_1M.json"

import { TableVirtualizedInfiniteProp } from "./components/TableVirtualizedInfiniteProp"

const storyData = {
  // "default": ContractData,
  // "100": Gen100Data,
  "100K": Gen100KData,
  // "1M": Gen1MData,
};

function App() {
  return (
    <>
      <TableVirtualizedInfiniteProp flatData={storyData["100K"]} />
    </>
  )
}

export default App
