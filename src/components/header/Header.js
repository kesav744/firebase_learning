import logo from "../../logo.svg";
import "./Header.css";
// import TextSlider from "./text_slider";
import ReUseSpan from '../reuse-compo/ReUseSpan';
import { getAuth, signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const auth = getAuth()

const Header = () => {
  const navigate = useNavigate();

  const logOut = async() => {
    const confirmation = window.confirm('Are you sure to make logout your account?');
    if(confirmation) {
    try {
      await signOut(auth);
      navigate('/')      
    } catch (error) {
      console.log('Error is :', error);
    }
  }
}

  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Hotkup-logo" />
        <div className='header-top-btns'>
          <button className="header-btn header-logout" onClick={logOut}>Logout</button>
          <button className="header-btn">Contact Us</button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-div">
          <div>
            {/* <h1 className="header-h1">Team productivity and business</h1>
            <div className="header-row">
              <h1 className="header-h1">intelligence,</h1>
              <TextSlider text={["all in one.", "one in all."]} />
            </div> */}
            <h1 className="header-h1">Team productivity and business intelligence, 
              <div className='header-h1-span' >
                <ReUseSpan text={['all in one.', "one in all."]}/>
              </div>
            </h1>
          </div>

          <p>
            Discover why HotKup will be as vital to your team as that first hot
            cup of morning coffee.
          </p>
          <div className="header-bottom-div2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
            />
            <button>
              Join Today - It's Free &nbsp; <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
