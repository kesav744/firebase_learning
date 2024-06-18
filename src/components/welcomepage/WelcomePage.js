import './WelcomePage.css';
import WelcomeTop from './WelcomeTop';
import WelcomeBottom from './WelcomeBottom';
import {auth} from '../firebase_config';

let user = auth.currentUser;
console.log("userss",user);
const WelcomePage = () => {
    return <div className='welcome-page'>
        <WelcomeTop />
        <WelcomeBottom />
    </div>
}

export default WelcomePage;