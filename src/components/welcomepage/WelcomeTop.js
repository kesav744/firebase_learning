import './WelcomeTop.css';
import WelcomeNav from './WelcomeNav';

const WelcomeTop = () => {
  return (
    <div className='welcome-top'>
        <div>
            <div className='welcome-top-round'></div>
        </div>
        <WelcomeNav />
    </div>
  )
}

export default WelcomeTop;