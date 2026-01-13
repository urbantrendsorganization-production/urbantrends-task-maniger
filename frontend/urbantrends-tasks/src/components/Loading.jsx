import React, { useEffect, useState } from "react";
import { LoadingScreenFancy } from "./ui/LoadingScreenFancy";
import api from "@/lib/axios";

function Loading() {
  const [clientData, setClientData] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/client/info/");
        setClientData(response.data);
        setLoadingMessage(response.data.message || "Loading complete");
      } catch (error) {
        console.error("Error fetching client data:", error);
        setLoadingMessage("Failed to load data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md">
      <LoadingScreenFancy message={loadingMessage} />

    
    </div>
  );
}

export default Loading;
