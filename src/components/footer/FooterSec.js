import "./FooterSec.css";
import Lists from "./Lists";
import logo from "../../logo.svg";

const FooterSec = ({ footerArr }) => {
  return (
    <>
      <section className='footer-icon'>
        <img src={logo} alt="logo" />
        <address>
          HotKup Incorporated <br />44 Grindstone Way <br />Waterdown L9H7B7 <br />Ontario Canada
        </address>
      </section>
      {footerArr.map((m) => (
        <section key={m.heading} className="footer-sec">
          <h2>{m.heading}</h2>
          <ul>
            {m.lists.map((ml) => (
              <Lists key={ml} liValue={ml} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default FooterSec;
