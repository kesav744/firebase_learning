import WelcomeTop from "./WelcomeTop";
import "./WelcomeBottom.css";
import "./WelcomePage.css";
import "./Login.css";
import passwordImg from "../image-sources/passwordIcon.svg";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import passwordEye from "../image-sources/passwordeye.svg";
import {db} from '../firebase_config';
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();

const SignUp = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordc, setShowPasswordc] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  function isValidEmail(emailaddress) {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validatePassword(pw) {

    return (/[A-Z]/.test(pw) &&
           /[a-z]/.test(pw) &&
           /[0-9]/.test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 7);

}

  function formValid() {
    if (uname.trim() === "") {
      alert("Please enter a name.");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
    } else if (password.trim() === "") {
      alert("Please enter a password.");
    } else if (password.trim().length < 8) {
      alert("Password should be atleast 8 characters");
    } else if (!validatePassword(password)) {
      alert("Password should contain an one uppercase, one lowercase, one numeric value, and a special character...");
    } else if (cpassword === "") {
      alert("Please enter a confirm password.");
    } else if (password !== cpassword) {
      alert("Password and Confirm password should be same...");
    } else {
      return true;
    }
  }

  const signUp = async () => {
    setIsLoading(true)
    try {
      if (formValid()) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log("signUp successfull");
        console.log({
          name: uname,
          email,
          password
        });
        console.log("what is the response");
        console.log(response);

        if (response) {
          const addData = await addDoc(collection(db,"myusers"), {
            name: uname,
            email
          });
          console.log(addData);
          console.log(addData.id);
          console.log('add');
          window.location.href = "/afterlogin";
        }
      }
    } catch (error) {
      console.log("what is the eror ", error);
      alert(`Already you have an account...\n Go and Login your account.`)
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
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setUname(e.target.value);
                  console.log(uname);
                }}
              />
            </div>
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
              <input
                type={showPasswordc ? "text" : "password"}
                name="cpassword"
                id="cpassword"
                placeholder="Enter your confirm password"
                onChange={(e) => {
                  setCpassword(e.target.value);
                  console.log(cpassword);
                }}
              />
              <img
                src={showPasswordc ? passwordEye : passwordImg}
                alt="cpasswordImg"
                onClick={() => {
                  setShowPasswordc((p) => !p);
                }}
              />
            </div>
            <div>
              <button onClick={signUp}>Sign Up</button>
            </div>
            {isLoading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
