import { useQuery } from "react-query";

interface Props {}

export default function List({}: Props) {
  const { data, status } = useQuery(
    ["global", 7],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      return fetch("https://api.coingecko.com/api/v3/global").then((res) =>
        res.json()
      );
    },
    {
      suspense: true,
      keepPreviousData: false,
      enabled: true,
      staleTime: 0,
      cacheTime: 1,
    }
  );

  return (
    <>
      <div>List - {status}</div>
      <br />
      <br />
      <br />
      <br />
      <div>{JSON.stringify(data, null, 2)}</div>
    </>
  );
}
