import './Logo.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/home" className="logo">
      <div className="logo__image">
        <img className="logo__image-img" src="images/logo.svg" alt="Affemity logo" />
      </div>
      <h1 className="logo__title">Affemity</h1>
    </Link>
  );
};
