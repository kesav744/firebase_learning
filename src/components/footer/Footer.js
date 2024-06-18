import "./Footer.css";
import FooterSec from "./FooterSec";
import linkedin from "../image-sources/linkedin.svg";
import facebook from "../image-sources/facebook.svg";
import insta from "../image-sources/insta.svg";
import twitter from "../image-sources/twitter.svg";
import utube from "../image-sources/utube.svg";
import NearFooter from '../below-main/NearFooter';

const Footer = () => {
  const socialMedias = [linkedin, facebook, insta, twitter, utube];
  const footerArr = [
    {
      heading: "RESOURCES",
      lists: ["FAQ", "Templates", "Team Solutions", "Webinars", "Login"],
    },
    {
      heading: "ESSENTIALS",
      lists: ["Apps", "Automation", "Integrations"],
    },
    {
      heading: "PRICING",
      lists: ["Standard", "Primium", "Enterprises"],
    },
    {
      heading: "COMPANY",
      lists: ["About", "Jobs", "Legal"],
    },
    {
      heading: "SUPPORT",
      lists: ["Blog", "Developers", "Help"],
    },
  ];

  return (
    <footer>
      <div className="footer-top">
        <NearFooter />
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom1">
          <FooterSec footerArr={footerArr} />
        </div>
        <div className="footer-bottom2">
          <div>
            {socialMedias.map((v, i) => {
              return (
                <span key={i}>
                  <img src={v} alt={i} />
                </span>
              );
            })}
          </div>
          <p>Copyright © 2021 HotKup Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
