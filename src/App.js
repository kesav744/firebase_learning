import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import SignUp from "./components/welcomepage/SignUp";
import Login from "./components/welcomepage/Login";
import AfterLogin from "./AfterLogin";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/afterlogin" element={<AfterLogin />} />
    </Routes>
  );
}

export default App;
