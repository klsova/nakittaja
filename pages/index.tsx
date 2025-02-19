import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { HelloResponse } from "@/types/api"; 

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    api.get<HelloResponse>("/hello/")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h1>{message}</h1>
    </div>
  );
}
