import { LogoWithText } from "../";
import vk from "../../assets/socials/vk.png";
import insta from "../../assets/socials/insta.png";
import twitter from "../../assets/socials/twitter.png";
import fb from "../../assets/socials/fb.png";
import "./style.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <LogoWithText />
          <div className="footer-socials">
            <div className="footer-social">
              <img src={vk} alt="social" />
            </div>
            <div className="footer-social">
              <img src={insta} alt="social" />
            </div>
            <div className="footer-social">
              <img src={twitter} alt="social" />
            </div>
            <div className="footer-social">
              <img src={fb} alt="social" />
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        <div className="container">
          <div className="copyright">
            ©2021 International Legal Center | Developed by: effex-it.com
          </div>
          <div className="docs">
            <a href="#">Privacy Policy</a>
            <a href="#">User Agreement</a>
          </div>
        </div>
      </div>
    </>
  );
}
