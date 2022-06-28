import { useQuery } from "react-query";

interface Props {}

export default function List({}: Props) {
  const { data, status } = useQuery(
    ["global"],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return fetch("https://api.coingecko.com/api/v3/global").then((res) =>
        res.json()
      );
    },
    { suspense: true, keepPreviousData: false, enabled: true }
  );

  return <div>List - {status}</div>;
}
