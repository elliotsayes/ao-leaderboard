import { fetchBalances } from "@/lib/ao/balances";
import { LeaderBoardFlat, balancesRawToFlat } from "@/lib/model/table";
import { useQuery } from "@tanstack/react-query";

interface LeaderboardDataLoaderProps {
  contractId: string;
  children: (data: LeaderBoardFlat) => React.ReactNode;
}

export function LeaderboardDataLoader(props: LeaderboardDataLoaderProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["aoBalance", props.contractId],
    queryFn: async () => {
      const response = await fetchBalances(props.contractId);
      const leaderboardData = balancesRawToFlat(response);
      console.log(leaderboardData);
      return leaderboardData;
    },
  })

  if (isError) {
    return <div>Loading...</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No data</div>
  }

  return props.children(data)
}