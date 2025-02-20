import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/hello/")
            .then(response => setMessage(response.data.message))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return <h1>{message || "Loading..."}</h1>;
}
