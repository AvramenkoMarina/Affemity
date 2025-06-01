import { useLayoutEffect, useState } from "react";
import { GoalContext } from "./GoalContext";

type Props = {
  children: React.ReactNode;
};

export const GoalProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [goal, setGoal] = useState<string | null>(localStorage.getItem('current-goal') || null);

  useLayoutEffect(() => {
    localStorage.setItem('current-goal', goal as string);
  }, [goal]);

  return (
    <GoalContext.Provider value={{ goal, setGoal }}>
      {children}
    </GoalContext.Provider>
  );
};