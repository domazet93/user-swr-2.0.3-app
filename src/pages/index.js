import useSWR from "swr";
import axios from "axios";

const fetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

const useFetchUser = () =>
  useSWR("/users/100", (url) =>
    fetch.get(url).then((res) => {
      const { data: userData } = res;

      if (userData) {
        return userData;
      }

      return undefined; 
    })
  );


export default function UserSWR() {
  const { isLoading } = useFetchUser();
  console.log("🚀 ~ file: index.js:24 ~ UserSWR ~ isLoading:", isLoading)

  return <div>Open React Profiler and check each time SWRTest rendered</div>;
}
