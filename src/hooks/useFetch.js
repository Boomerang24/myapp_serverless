import { useEffect, useState } from "react";

export const useFetch = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      try {
        // const res = await fetch("https://randomuser.me/api/?results=20");
        const res = await fetch(
          "https://tjsjiib216.execute-api.us-east-1.amazonaws.com/dev/my-users"
        );
        const json = await res.json();
        const users = await json.users;
        setResponse(users);
      } catch (error) {
        console.log(error);
      }
    };
    doFetch();
  }, []);
  return response;
};
