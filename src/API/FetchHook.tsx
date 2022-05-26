import { useState } from "react";
import { useEffect } from "react";
import { User } from "../components/type/type";

export function useFetchHook(url: string) {
  const [data, setData] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        setData({
          name: res.results[0].name,
          email: res.results[0].email,
          gender: res.results[0].gender,
          dob: res.results[0].dob.date,
          location: res.results[0].location,
          phone: res.results[0].phone,
          password: res.results[0].login.password,
          picture: res.results[0].picture,
        })
      )
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
}
