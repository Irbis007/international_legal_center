import partnerBg1 from "../../assets/partner/partner-bg1.png";
import partnerBg2 from "../../assets/partner/partner-bg2.png";

import partnerCard1 from "../../assets/partner/partner-card1.png";
import partnerCard2 from "../../assets/partner/partner-card2.png";
import partnerCard3 from "../../assets/partner/partner-card3.png";
import partnerCard4 from "../../assets/partner/partner-card4.png";

import "./style.css";

export function Partner() {
  return (
    <div className="partner">
      <div className="partner-body">
        <img src={partnerBg2} alt="partner" className="img2" />
        <div className="container">
          <img src={partnerBg1} alt="partner" className="img1" />
          <h2 className="title">Become an ILC partner</h2>
          <p className="subtitle">
            and earn money from recommendations <br />
            anytime, from anywhere in the world
          </p>
        </div>
      </div>
      <div className="container">
        <div className="partner-cards">
          <div className="card partner_card">
            <div className="partner_card-img">
              <img src={partnerCard1} alt="card img" />
            </div>
            <div className="partner_card-body">
              <h5 className="partner_card-title">High bonuses</h5>
              <p className="partner_card-subtitle subtitle">
                You earn up to 35% of the cost of each policy purchased through
                your recommendation. <br />
                <br />
                <span className="gray">
                  For example: a legal "International Business" policy costs
                  $750/year, and you earn $260 on it.
                </span>
              </p>
            </div>
          </div>
          <div className="card partner_card">
            <div className="partner_card-img">
              <img src={partnerCard2} alt="card img" />
            </div>
            <div className="partner_card-body">
              <h5 className="partner_card-title">Useful product</h5>
              <p className="partner_card-subtitle subtitle">
                ILC is your personal team of lawyers, available here and now,
                24/7, 7 days a week. <br />
                <br />
                Need help? Just one click, and your personal ILC lawyer will be
                ready to help.{" "}
                <span className="black">
                  It's several times cheaper and faster than hiring a private
                  lawyer.
                </span>
              </p>
            </div>
          </div>
          <div className="card partner_card">
            <div className="partner_card-img">
              <img src={partnerCard3} alt="card img" />
            </div>
            <div className="partner_card-body">
              <h5 className="partner_card-title">Wide audience</h5>
              <p className="partner_card-subtitle subtitle">
                Absolutely everyone needs high-quality legal assistance:
                businesses, families, large companies, experts, and individuals.
                <br />
                <br />
                By recommending an ILC policy,{" "}
                <span className="black">you help people</span> quickly solve
                life's problems with just one click.
              </p>
            </div>
          </div>
          <div className="card partner_card">
            <div className="partner_card-img">
              <img src={partnerCard4} alt="card img" />
            </div>
            <div className="partner_card-body">
              <h5 className="partner_card-title">Training and support</h5>
              <p className="partner_card-subtitle subtitle">
                You'll gain access to your personal account with detailed
                information on how to:
                <ul>
                  <li className="list_item">effectively attract clients,</li>
                  <li className="list_item">track conversions,</li>
                  <li className="list_item">increase your income,</li>
                  <li className="list_item">cash out funds, and much more.</li>
                </ul>
                <span className="black">
                  We'll support you every step of the way.
                </span>
              </p>
            </div>
          </div>
            <button className="button">Become a partner</button>
        </div>
      </div>
    </div>
  );
}
