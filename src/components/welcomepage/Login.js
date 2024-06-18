import WelcomeTop from "./WelcomeTop";
import "./WelcomeBottom.css";
import "./WelcomePage.css";
import "./Login.css";
import passwordImg from "../image-sources/passwordIcon.svg";
import passwordEye from "../image-sources/passwordeye.svg";
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    console.log('useEffect');
    const userState = async() => {
      try {
        await onAuthStateChanged(auth,(user) => {
          if (user) {
            navigate('/afterlogin')
          }
        })
      } catch (error) {
        console.log('what is error',error);
      }
    }
    userState()
  },[navigate])


  function isValidEmail(emailaddress) {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function formValid() {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
    } else if (password === "") {
      alert("Please enter a password.");
    } else if (password.length < 8) {
      alert("Password should be an atleast 8 characters...");
    } else {
      return true;
    }
  }

  const signIn = async () => {
    setIsLoading(true)
    try {
      if (formValid()) {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (response) {
          window.location.href = "/afterlogin";
        }
      }
    } catch (error) {
      console.log("Error is :", error);
      alert("Wrong credential...Enter a valid credential.");
    }
    setIsLoading(false)
  };

  return (
    <div className="welcome-page">
      <WelcomeTop />
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
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(email);
                }}
              />
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(password);
                }}
              />
              <img
                src={showPassword ? passwordEye : passwordImg}
                alt="passwordImg"
                onClick={() => {
                  setShowPassword((p) => !p);
                }}
              />
            </div>
            <div>
              <button onClick={signIn}>Sign In</button>
            </div>
            {isLoading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
