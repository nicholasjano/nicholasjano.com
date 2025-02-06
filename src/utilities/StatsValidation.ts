import type { DynamicStatsType } from "@pageTypes/pageTypes";

export const isValidStats = (data: unknown): data is DynamicStatsType => {
  if (!data || typeof data !== "object") return false;

  const typedData = data as Record<keyof DynamicStatsType, unknown>;

  return (
    typeof typedData.totalCommitsPastMonth === "number" &&
    typeof typedData.uniqueRepositoriesPastMonth === "number" &&
    typeof typedData.newSolutionCommits === "number"
  );
};
