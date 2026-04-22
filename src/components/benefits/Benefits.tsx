import phone from "../../assets/benefits.png";
import benefit1 from "../../assets/benefits/benefit-1.png";
import benefit2 from "../../assets/benefits/benefit-2.png";
import benefit3 from "../../assets/benefits/benefit-3.png";
import benefit4 from "../../assets/benefits/benefit-4.png";
import benefit5 from "../../assets/benefits/benefit-5.png";
import "./style.css";

export function Benefits() {
  return (
    <div className="benefits">
      <div className="container">
        <h2 className="title benefits-title">Benefits of the service</h2>
        <div className="benefits-content">
          <div className="benefits-phone">
            <img src={phone} alt="phone img" />
            <div className="phone-question">
              How can I help you?
              <button className="button phone-button">Ask a question</button>
            </div>
          </div>
          <div className="benefits-body">
            <h3 className="title purple-title">SIRIUS</h3>
            <p className="subtitle benefits-subtitle">
              — the first fully-fledged artificial intelligence system that
              independently consults people on any legal issues in real time.
              <br />
              <br />
              Sirius analyzes incoming requests and promptly generates a
              qualified response based on legal logic.
              <br />
              <br />
              Access to the system is provided to the policyholder in their
              personal account on our website.
            </p>
            <ul className="list benefits-list">
              <li className="list_item">open 24/7</li>
              <li className="list_item">
                100% accuracy and correctness of answers
              </li>
              <li className="list_item">
                if necessary, connects a live specialist
              </li>
              <li className="list_item">
                doesn't take sick leave and will never quit
              </li>
            </ul>
          </div>
        </div>
        <div className="benefits-cards">
          <div className="benefits-card card">
            <img src={benefit1} alt="benefit" />
            <h3 className="title title-secondary">
              Convenient <br />
              format
            </h3>
            <p className="subtitle">
              We offer 24/7 consultations in any convenient format: chat, audio
              call, or through Sirius artificial intelligence in your personal
              account.
            </p>
          </div>
          <div className="benefits-card card">
            <img src={benefit2} alt="benefit" />
            <h3 className="title title-secondary">
              Affordable <br />
              price
            </h3>
            <p className="subtitle">
              Choose a legal support package that suits you best, paying only
              for what you really need.
            </p>
          </div>
          <div className="benefits-card card">
            <img src={benefit3} alt="benefit" />
            <h3 className="title title-secondary">
              Tax <br /> Calculator
            </h3>
            <p className="subtitle">
              Get an accurate tax calculation in minutes with the ILC_tax
              Telegram bot—it's fast and convenient!
            </p>
          </div>
          <div className="benefits-card card">
            <img src={benefit4} alt="benefit" />
            <h3 className="title title-secondary">
              Document <br />
              Builder
            </h3>
            <p className="subtitle">
              Access over 9,500 ready-made and developed business documents for
              free!
            </p>
          </div>
          <div className="benefits-card card">
            <img src={benefit5} alt="benefit" />
            <h3 className="title title-secondary">
              Free access <br />
              for everyone who <br /> registers
            </h3>
            <p className="subtitle">
              A limited-document builder based on a Telegram bot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
