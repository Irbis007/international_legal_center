import boss from "../../assets/boss.png";
import "./style.css";

export function Boss() {
  return (
    <div className="boss">
      <div className="container">
        <div className="boss-img">
          <img src={boss} alt="boss" />
          <div className="boss-quote">
            <div>“</div>
            <span>
              I will personally support you throughout every stage of your
              program development. <br /> Please contact me by email with any
              questions.
            </span>
          </div>
        </div>
        <div className="boss-body">
          <p className="subtitle">Head of ILC LLC</p>
          <h2 className="title">Darya Alegova</h2>
          <h5 className="title-medium">10 years in management and law</h5>
          <br /><br />
          <p className="subtitle boss-subtitle">
            We strive to provide care and create the most comfortable conditions
            for the development of each partner:
          </p>
          <ul>
            <li className="list_item">a personal mentor,</li>
            <li className="list_item">step-by-step training,</li>
            <li className="list_item">ready-made promotion tools</li>
          </ul>
          <p className="subtitle">and instant bonus payments.</p>
          <br />
          <p className="subtitle">
            For more details on the affiliate program, please visit your
            personal account after registration.
          </p>
          <button className="button">Register</button>
        </div>
      </div>
    </div>
  );
}
