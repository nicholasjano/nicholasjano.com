import { useState, useEffect } from "react";
import type { DynamicStatsType } from "@pageTypes/pageTypes";
import { defaultStats, API_URL } from "@data/pageData";

const FETCH_INTERVAL = 5 * 60 * 1000; // 5 minutes

export const useFetchStats = (): DynamicStatsType => {
  const [stats, setStats] = useState<DynamicStatsType>(defaultStats);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch stats.json");

        const data: DynamicStatsType = await response.json();

        setStats(data);

        localStorage.setItem("githubStats", JSON.stringify(data));
        localStorage.setItem("lastFetchTime", Date.now().toString());
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats(defaultStats);
      }
    }

    const lastFetchTime = localStorage.getItem("lastFetchTime");
    const cachedStats = localStorage.getItem("githubStats");

    if (
      !lastFetchTime ||
      !cachedStats ||
      Date.now() - parseInt(lastFetchTime) > FETCH_INTERVAL
    ) {
      fetchStats();
    } else {
      setStats(JSON.parse(cachedStats));
    }
  }, []);

  return stats;
};
