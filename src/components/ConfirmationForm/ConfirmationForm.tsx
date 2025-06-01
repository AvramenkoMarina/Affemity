import "./ConfirmationForm.css";
import classNames from "classnames";
import { MainButton } from "../MainButton";
import { useFormWorker } from "../../hooks/useFormWorker";

export const ConfirmationForm = () => {
  const { email, emailError, handleEmailChange, handleSubmit } = useFormWorker({});

  return (
    <form
      className="confirmation-form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="confirmation-form__input">
        <input
          type="text"
          value={email}
          onChange={(event) => handleEmailChange(event.target.value)}
          className={classNames("confirmation-form__input-field", {
            "confirmation-form__input-field--has-error": emailError,
          })}
          placeholder="example@gmail.com"
        />
        {emailError && (
          <span className="confirmation-form__input-error">{emailError}</span>
        )}
      </div>

      <MainButton type="submit">Get results</MainButton>
    </form>
  );
};
