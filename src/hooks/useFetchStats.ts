import { useState, useEffect } from "react";
import type {
  DynamicStatsType,
  UseFetchStatsReturn,
} from "@pageTypes/pageTypes";
import { defaultStats, API_URL } from "@data/pageData";
import { isValidStats } from "@utilities/StatsValidation";

const FETCH_INTERVAL = 5 * 60 * 1000;

export const useFetchStats = (): UseFetchStatsReturn => {
  const [stats, setStats] = useState<DynamicStatsType>(defaultStats);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch stats.json");

        const data = await response.json();

        // Check if data matches our type requirements
        if (!isValidStats(data)) {
          setStats(defaultStats);
        } else {
          // Merge API data with default stats to ensure all fields are present
          const mergedStats = { ...defaultStats, ...data };
          setStats(mergedStats);
          localStorage.setItem("githubStats", JSON.stringify(data));
          localStorage.setItem("lastFetchTime", Date.now().toString());
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats(defaultStats);
      } finally {
        setIsLoaded(true);
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
      // Merge cached API data with default stats to ensure all fields are present
      const cachedData = JSON.parse(cachedStats);
      const mergedStats = { ...defaultStats, ...cachedData };
      setStats(mergedStats);
      setIsLoaded(true);
    }
  }, []);

  return { stats, isLoaded };
};
