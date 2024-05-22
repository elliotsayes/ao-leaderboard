import { fetchBalances, fetchInfo } from "@/lib/ao/balances";
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
      const info = await fetchInfo(props.contractId);
      const balances = await fetchBalances(props.contractId);
      const leaderboardData = balancesRawToFlat(balances, parseInt(info.Denomination));
      return leaderboardData;
    },
  })

  if (isError) {
    return <div>Error</div>
  }
  
  return props.children(data)
}

export default LeaderboardDataLoader;
