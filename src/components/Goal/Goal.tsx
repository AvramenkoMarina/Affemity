import { useNavigate } from "react-router-dom";
import "./Goal.css";
import { useGoal } from "../../hooks/useGoal";

export const Goal = () => {
  const { setGoal } = useGoal();
  const navigate = useNavigate();

  const handleSelect = (goal: string) => {
    setGoal(goal);
    navigate("/test");
  };

  return (
    <div className="goal">
      <h2 className="goal__title">What is your main goal?</h2>
      <div className="goal__options">
        <button
          onClick={() => handleSelect("goal1")}
          className="goal__options-select"
        >
          Build a deep connection
        </button>
        <button
          onClick={() => handleSelect("goal2")}
          className="goal__options-select"
        >
          Create emotional attraction
        </button>
      </div>
      <button className="goal__other">Other</button>
    </div>
  );
};
