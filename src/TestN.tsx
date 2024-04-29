import { useQuery } from "@tanstack/react-query";
import { TableVirtualizedInfiniteProp } from "./components/TableVirtualizedInfiniteProp";
import { useState } from "react";

const options = ["100", "100K", "1M"] as const;

interface Props {
  addressFilter?: string;
}

export const TestN = ({ addressFilter }: Props) => {
  const [option, /* setOption */] = useState<typeof options[number]>(
    window.location.search.slice(1) as typeof options[number] || "100"
  );

  const { data } = useQuery({
    queryKey: [`test${option}`],
    queryFn: async () => {
      const response = await fetch(`./gen_${option}.json`)
      const data = await response.json()
      return data
    },
  })

  if (!data) return <div>Loading...</div>

  return (
    <>
      {/* <h1>Test N</h1>
      <select value={option} onChange={(e) => setOption(e.target.value as typeof options[number])}>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select> */}
      <TableVirtualizedInfiniteProp
        flatData={data}
        addressFilter={addressFilter}
      />
    </>
  )
}
