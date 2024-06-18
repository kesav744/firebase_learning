import "./WelcomeNav.css";
import search from "../image-sources/search.svg";
import { Link } from 'react-router-dom';

const WelcomeNav = () => {
  return (
    <div className="welcome-top-navbar">
      <div>
        <img src={search} alt="search" />
        <input type="text" placeholder="Search..." name="search" />
      </div>
      <select name="languages" id="languages">
        <option value="English">English &#40;united states&#41;</option>
        <option value="Tamil">Tamil</option>
        <option value="Kannada">Kannada</option>
        <option value="Hindi">Hindi</option>
      </select>
      <Link to="/login">
      <button className="login">Log in</button>
      </Link>
      <Link to="/signup">
      <button className="signup">Sign Up</button>
      </Link>
    </div>
  );
};

export default WelcomeNav;
