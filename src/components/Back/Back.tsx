import "./Back.css";
import { Link } from "react-router-dom";

export const Back = () => {
  return (
    <Link to=".." className="back">
      <img src="images/arrow.svg" alt="Back arrow" className="back__icon" />
    </Link>
  );
};
