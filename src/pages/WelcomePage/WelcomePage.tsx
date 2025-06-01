import { Chart } from "../../components/Chart";
import { Goal } from "../../components/Goal";
import { Logo } from "../../components/Logo";
import { Rights } from "../../components/Rights";
import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="welcome__header">
        <Logo />
        <div className="welcome__header-content">
          <h2 className="welcome__header-title title">
            Change your{" "}
            <span className="welcome__header-highlighted">love life</span>
          </h2>
          <p className="welcome__header-text">
            with easy-to-use practical tips that you can apply in any situation
          </p>
        </div>
      </div>
      <div className="welcome__chart">
        <Chart />
      </div>
      <Goal />
      <Rights />
    </div>
  );
};
