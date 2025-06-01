import { createContext } from "react";

interface GoalContextType {
  goal: string | null;
  setGoal: (goal: string) => void;
}

export const GoalContext = createContext<GoalContextType | undefined>(undefined);