import { useContext } from "react";
import { GoalContext } from "../context/GoalContext";

export const useGoal = () => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("useGoal must be used within a GoalProvider");
  }
  return context;
};
