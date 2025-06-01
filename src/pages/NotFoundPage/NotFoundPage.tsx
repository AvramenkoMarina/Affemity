import { Logo } from "../../components/Logo";
import "./NotFoundPage.css";

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__heading">
        <Logo />
      </div>
      <div className="not-found__content">
        <div className="not-found__content-title title">404</div>
        <div className="not-found__content-subtitle">Oops! Page not found</div>
        <div className="not-found__content-text">
          Sorry, the page you are looking for doesn&apos;t exist or an other error
          occured...
        </div>
      </div>
    </div>
  );
};
