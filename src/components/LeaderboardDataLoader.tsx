import { fetchBalances } from "@/lib/ao/balances";
import { LeaderBoardFlat, balancesRawToFlat } from "@/lib/model/table";
import { useQuery } from "@tanstack/react-query";
import { LoadingSpinner } from "./LoadingSpinner";

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
    return <div>Error</div>
  }

  if (isLoading) {
    return (
      <div className="flex flex-row flex-grow justify-center items-center pb-20">
        <LoadingSpinner />
      </div>
    )
  }

  if (!data) {
    return <div>No data</div>
  }

  return props.children(data)
}