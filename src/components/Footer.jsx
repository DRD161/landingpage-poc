import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import GetStartedCta from './GetStartedCta.jsx';

const Footer = ({ links }) => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {links.topLinks.map((item, index) => (
          <a href="#" className="footer-link" key={index}>
            {item}
          </a>
        ))}
        <GetStartedCta text="Get Started" />
      </div>
      <div className="footer-utility">
        {links.utilityLinks.map((item, index) => (
          <a href="#" className="footer-link utility-link" key={index}>
            {item}
          </a>
        ))}
        <p>
          Built by{' '}
          <a href="#" className="footer-link">
            Dylan Davenport
          </a>
        </p>
      </div>
      <div className="footer-bottom">
        <div className="footer-address">
          <p>
            123 East Neat St <br />
            Chicago, IL 60605
          </p>
          <p>
            <span>Chicago</span>
            <br />
            (312) 123 - 4567
          </p>
        </div>
        <div className="footer-social">
          <p className="social-follow">Follow us</p>
          <a href="#">
            <img src={facebook} alt="Follow us on Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Follow us on Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
