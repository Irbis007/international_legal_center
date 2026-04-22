import logo from "../../assets/logo.png";
import business from "../../assets/supports/business.png";
import startup from "../../assets/supports/startup.png";
import clients from "../../assets/supports/clients.png";
import "./style.css";
export function SecondSection() {
  return (
    <div className="second_section">
      <div className="container">
        <div className="second_section-content">
          <div className="second_section-body">
            <div className="second_section-logo">
              <img src={logo} alt="logo" />
            </div>
            <h2 className="second_section-title title">
              Your personal online team of lawyers
            </h2>
            <p className="second_section-subtitle subtitle">
              We provide a comprehensive consulting service with a policy system
              for private clients and businesses, using the latest digital
              technologies.
            </p>
          </div>
          <div className="second_section-cards">
            <div className="second_section-card card card-with-linear">
              <div className="card-title">
                100+ <span>thousand</span>
              </div>
              <p className="card-subtitle subtitle">
                Clients <br />
                all over the world
              </p>
            </div>
            <div className="second_section-card card card-with-linear">
              <div className="card-title">
                15 <span>years</span>
              </div>
              <p className="card-subtitle subtitle">
                Working <br /> with clients
              </p>
            </div>
            <div className="second_section-card card card-with-linear">
              <div className="card-title">50+</div>
              <p className="card-subtitle subtitle">
                Clients <br />
                all over the world
              </p>
            </div>
            <div className="second_section-card card card-with-linear">
              <div className="card-title">SIRIUS</div>
              <p className="card-subtitle subtitle">
                Artificial intelligence based system
              </p>
            </div>
          </div>
        </div>
        <div className="second_section-support">
          <h3 className="title title-secondary second_section-support-title">We provide support for</h3>
          <div className="second_section-support-cards">
            <div className="second_section-support-card card">
              <img src={business} alt="business" />
              <h3 className="title title-secondary">Business</h3>
              <p className="subtitle">
                Hiring professional legal services for your company at a fixed
                rate is several times more cost-effective than maintaining your
                own staff.
              </p>
            </div>
            <div className="second_section-support-card card">
              <img src={startup} alt="startup" />
              <h3 className="title title-secondary">StartUP projects</h3>
              <p className="subtitle">
                ILC experts will help you choose the optimal legal structure for
                your business, optimize taxes, and prepare the necessary
                documentation.
              </p>
            </div>
            <div className="second_section-support-card card">
              <img src={clients} alt="clients" />
              <h3 className="title title-secondary">Private clients</h3>
              <p className="subtitle">
                Prompt solutions to complex issues online: road accidents,
                inheritance, insurance disputes, land and property matters, and
                rights protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
