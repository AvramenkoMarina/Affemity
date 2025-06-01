import "./ResultsPage.css";
import { Logo } from "../../components/Logo";
import { ReviewsList } from "../../components/ReviewsList";
import { reviews } from "../../utils/Reviews";
import { LoadersList } from "../../components/LoadersList";
import { loadersTitles } from "../../utils/LoadersTitles";

export const ResultsPage = () => {

  return (
    <div className="results">
      <div className="results__content">
        <Logo />
        <h2 className="results__content-title title">
          We are crafting your personalized plan
        </h2>
        <LoadersList loadersTitles={loadersTitles} />
      </div>
      
      <ReviewsList reviews={reviews} />
    </div>
  );
};
