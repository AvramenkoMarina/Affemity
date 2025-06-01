import "./MainButton.css";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
  isDisabled?: boolean;
  onClick?: () => void;
};

export const MainButton: React.FC<Props> = ({ children, isDisabled = false, type = "button", onClick }) => {

  return (
    <button
      type={type}
      className={classNames("main-button", {
        "main-button--disabled": isDisabled,
      })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
