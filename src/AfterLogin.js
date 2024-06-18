import Header from "./components/header/Header";
import Illuminating from "./components/header/Illuminating";
import Main from "./components/Main/Main";
import BelowMain from "./components/below-main/BelowMain";
import Footer from "./components/footer/Footer";
import ListeningClient from "./components/footer/ListeningClient";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const auth = getAuth();


const AfterLogin = () => {

  const navigate = useNavigate();

  useEffect(()=>{    
    const userState = async() => {
      try {
        await onAuthStateChanged(auth,(user) => {
          if (!user) {
            navigate('/')
          }
        })
      } catch (error) {
        console.log('what is error',error);
      }
    }
    userState()
  },[navigate])

  return (
    <>
      <Header />
      <Illuminating />
      <Main />
      <BelowMain />
      <ListeningClient />
      <Footer />
    </>
  );
};

export default AfterLogin;
