import { useQuery } from "@tanstack/react-query";
import { TableVirtualizedInfiniteProp } from "./components/TableVirtualizedInfiniteProp";
import { LoadingSpinner } from "./components/LoadingSpinner";

interface Props {
  addressFilter?: string;
}

const Fixed = ({ addressFilter }: Props) => {
  const { data } = useQuery({
    queryKey: ['fixed'],
    queryFn: async () => {
      const response = await fetch(`./leaderboard.json`)
      const data = await response.json()
      return data
    },
  })

  if (!data) return <LoadingSpinner />

  return (
    <TableVirtualizedInfiniteProp
      flatData={data}
      addressFilter={addressFilter}
    />
  )
}

export default Fixed;
