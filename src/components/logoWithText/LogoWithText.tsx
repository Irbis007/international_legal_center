import logo from "../../assets/logo.png";
import "./style.css";
export function LogoWithText() {
  return (
    <div className="logo-container">
      <div className="logo">
        <div className="logo-img">
          <img src={logo} alt="logo international-legal-center" />
        </div>
        <div className="logo-text">International Legal Center</div>
      </div>
      <div className="logo-subtitle">First International Legal Center</div>
    </div>
  );
}
