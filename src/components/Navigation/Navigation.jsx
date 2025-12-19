import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul class="footer__list">
        <li class="footer__list-item">
          <a href="#" class="footer__social-link">
            <img
              src="./images/facebook_white.svg"
              alt="Facebook Icon"
              class="footer__social-icon"
            />
            Facebook
          </a>
        </li>
        <li class="footer__list-item">
          <a href="#" class="footer__social-link">
            <img
              src="./images/instagram_white.svg"
              alt="Instagram Icon"
              class="footer__social-icon"
            />
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
