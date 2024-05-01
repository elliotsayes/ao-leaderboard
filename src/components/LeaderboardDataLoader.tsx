import { fetchBalances } from "@/lib/ao/balances";
import { LeaderBoardFlat, balancesRawToFlat } from "@/lib/model/table";
import { useSuspenseQuery } from "@tanstack/react-query";

interface LeaderboardDataLoaderProps {
  contractId: string;
  children: (data: LeaderBoardFlat) => React.ReactNode;
}

export function LeaderboardDataLoader(props: LeaderboardDataLoaderProps) {
  const { data, isError } = useSuspenseQuery({
    queryKey: ["aoBalance", props.contractId],
    queryFn: async () => {
      const response = await fetchBalances(props.contractId);
      const leaderboardData = balancesRawToFlat(response);
      console.log(leaderboardData);
      return leaderboardData;
    },
  })

  if (isError) {
    return <div>Error</div>
  }

  if (!data) {
    return <div>No data</div>
  }

  return props.children(data)
}
