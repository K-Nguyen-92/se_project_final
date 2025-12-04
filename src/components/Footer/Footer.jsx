import "./Footer.css";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__signature">© 2025 Supersite, Powered by News API</p>
      <div className="footer__links">
        <a href="/" className="footer__link" target="_blank" rel="noreferrer">
          Home
        </a>
        <a
          href="https://hub.tripleten.com/u/77b11010"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>
        <a
          href="https://github.com/K-Nguyen-92"
          className="footer__link-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/knguyen92/"
          className="footer__link-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="linkedin logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
