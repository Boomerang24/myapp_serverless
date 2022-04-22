import { useEffect, useState } from "react";

export const useFetch = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      try {
        // const res = await fetch("https://randomuser.me/api/?results=20");
        const res = await fetch(
          "https://tjsjiib216.execute-api.us-east-1.amazonaws.com/default/getAPIUsers",
          {
            mode: "cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const json = await res.json();
        const users = json.results;
        setResponse(users);
      } catch (error) {
        console.log(error);
      }
    };
    doFetch();
  }, []);
  return response;
};
