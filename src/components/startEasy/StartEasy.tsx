import startEasyBg from "../../assets/start-easy.png";
import startEasy1 from "../../assets/start-easy/start-easy1.png";
import startEasy2 from "../../assets/start-easy/start-easy2.png";

import './style.css'

export function StartEasy() {
  return (
    <div className="start_easy">
      <div className="container">
        <img src={startEasyBg} alt="" className="start_easy-img"/>
        <h2 className="title start_easy-title">Start easy</h2>
        <div className="start_easy-cards">
          <div className="start_easy-card card">
            <div className="start_easy-card-number">1</div>
            <h4 className="start_easy-card-title">Registration</h4>
            <p className="start_easy-card-subtitle subtitle">
              Fill out a simple form to participate in the program and activate
              your client package.
            </p>
          </div>
          <div className="start_easy-card card">
            <div className="start_easy-card-number">2</div>
            <h4 className="start_easy-card-title">Education</h4>
            <p className="start_easy-card-subtitle subtitle">
              Useful training materials await you, allowing you to easily
              monetize your time.
            </p>
          </div>
          <div className="start_easy-card card">
            <img src={startEasy1} alt="" />
            <div className="start_easy-card-number">3</div>
            <h4 className="start_easy-card-title">Strategy</h4>
            <p className="start_easy-card-subtitle subtitle">
              Use a detailed and clear algorithm of actions to achieve great
              results.
            </p>
          </div>
          <div className="start_easy-card card">
            <img src={startEasy2} alt="" />
            <h4 className="start_easy-card-title">Result</h4>
            <p className="start_easy-card-subtitle subtitle">
              Earn up to 35% on every policy purchase using your affiliate link
              from the first days after registration.
            </p>
            <button className="button">Start earning money</button>
          </div>
        </div>
      </div>
    </div>
  );
}
