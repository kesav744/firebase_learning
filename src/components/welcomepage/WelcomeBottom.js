import "./WelcomeBottom.css";
import { Link } from 'react-router-dom';

const WelcomeBottom = () => {
  return (
    <div className="welcome-bottom">
      <div className="welcome-bottom-main">
        <div className="welcome-bottom-main-div1">
          <h1>Design with us</h1>
          <h1>Explore with us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
            orci, eu porttitor lacus.
          </p>
          <div>
            <Link to='signup'>
            <button>Sign up</button></Link>
            <Link to='login'>
            <button>Sign In</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBottom;
