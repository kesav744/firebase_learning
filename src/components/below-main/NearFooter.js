import './NearFooter.css';
import mailImg from '../image-sources/mailImg.svg';

const NearFooter = () => {
    return <div className='nearfooter'>
        <div className='nearfooter-div1'><img src={mailImg} alt='mailImg' /></div>
        <div className='nearfooter-div2'>
            <h2>Never forget an important detail again. Get started with HotKup today.
            </h2>
            <div className="nearfooter-div2-bottom">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
            />
            <button>
              Sign Up
            </button>
          </div>
        </div>
    </div>
}

export default NearFooter;