import { useState } from "react";
import { LinkWithArrow } from "../";
import "./style.css";

export function Tariffs() {
  const [paymentPeriod, setPaymentPeriod] = useState<"month" | "year">("month");

  const getPrices = (originalPrice: number) => {
    return paymentPeriod == "month"
      ? originalPrice
      : Math.floor(originalPrice * 12 * 0.9);
  };

  return (
    <div className="tariffs">
      <div className="container">
        <h2 className="title tariffs-title">Tariffs</h2>
        <p className="subtitle tariffs-subtitle">
          for everyone and for everyone
        </p>
        <div className="tariffs-buttons">
          <button
            className={`button tariffs-button ${paymentPeriod === "month" ? "active" : "inactive"}`}
            onClick={() => setPaymentPeriod("month")}
          >
            1 month
          </button>
          <button
            className={`button tariffs-button ${paymentPeriod === "year" ? "active" : "inactive"}`}
            onClick={() => setPaymentPeriod("year")}
          >
            Year
          </button>
        </div>
        <div className="tariffs-content">
          <div className="tariff-card card">
            <h4 className="title title-blue">Easy start</h4>
            <h3 className="title title-gray">Free</h3>
            <p className="subtitle">For individuals</p>
            <h3 className="title title-medium">Available for you</h3>
            <ul className="list">
              <li className="list_item">Document designer</li>
              <li className="list_item">Personal account (basic version)</li>
              <li className="list_item">Sirius</li>
              <li className="list_item">
                1 oral initial consultation <br />
                on a legal request
              </li>
            </ul>
            <LinkWithArrow />
            <button className="button">Submit a request</button>
          </div>
          <div className="tariff-card card">
            <h4 className="title title-blue">Standard</h4>
            <p className="subtitle">For individuals</p>
            <h3 className="title title-secondary">
              ${getPrices(28)}/{paymentPeriod}
            </h3>
            <h3 className="title title-medium">Available for you</h3>
            <ul className="list">
              <li className="list_item">
                Free phone line + “call me back” function
              </li>
              <li className="list_item">
                Access to Sirius's premier legal intelligence 24/7
              </li>
              <li className="list_item">Personal account (full version)</li>
              <li className="list_item">Document designer</li>
              <li className="list_item">
                Oral and written legal consultations 24/7
              </li>
            </ul>
            <LinkWithArrow />
            <button className="button">Submit a request</button>
          </div>
          <div className="tariff-card card">
            <h4 className="title title-blue">business consultant</h4>
            <p className="subtitle">For individuals and freelancers</p>
            <h3 className="title title-secondary">
              {" "}
              ${getPrices(38)}/{paymentPeriod}
            </h3>
            <h3 className="title title-medium">Available for you</h3>
            <ul className="list">
              <li className="list_item">
                Free phone line + "call me back" feature
              </li>
              <li className="list_item">
                Access to Sirius's premier legal intelligence 24/7
              </li>
              <li className="list_item">
                A package of documents for starting a business
              </li>
              <li className="list_item">Transaction support</li>
              <li className="list_item">
                Oral and written legal consultations 24/7
              </li>
            </ul>
            <LinkWithArrow />
            <button className="button">Submit a request</button>
          </div>
          <div className="tariff-card card">
            <h4 className="title title-blue">business premium</h4>
            <p className="subtitle">For medium-sized businesses</p>
            <h3 className="title title-secondary">
              {" "}
              ${getPrices(49)}/{paymentPeriod}
            </h3>
            <h3 className="title title-medium">Available for you</h3>
            <ul className="list">
              <li className="list_item">
                Development of unique contracts of any complexity
              </li>
              <li className="list_item">
                Access to Sirius, the world's first legal AI, 24/7
              </li>
              <li className="list_item">
                Company registration and account opening
              </li>
              <li className="list_item">
                Support for transactions of any complexity
              </li>
              <li className="list_item">
                Oral and written legal consultations 24/7
              </li>
            </ul>
            <LinkWithArrow />
            <button className="button">Submit a request</button>
          </div>
          <div className="tariff-card card">
            <h4 className="title title-blue">international business</h4>
            <p className="subtitle">For doing business abroad</p>
            <h3 className="title title-secondary">
              {" "}
              ${getPrices(98)}/{paymentPeriod}
            </h3>
            <h3 className="title title-medium">Available for you</h3>
            <ul className="list">
              <li className="list_item">
                Development of unique contracts of any complexity
              </li>
              <li className="list_item">
                Consultations and support for registering companies and bank
                accounts worldwide
              </li>
              <li className="list_item">Providing legal services in English</li>
              <li className="list_item">Consultations on international law</li>
              <li className="list_item">
                Support for transactions of any complexity
              </li>
            </ul>
            <LinkWithArrow />
            <button className="button">Submit a request</button>
          </div>
        </div>
      </div>
    </div>
  );
}
