import { useState } from "react";

import "./style.css";
import { LogoWithText } from "../";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <LogoWithText />
          <div className="header-phone_number phone_number">
            1 (234) 567-89-00
          </div>
          <button className="header-button button">Sign in</button>
          <button className="header-mobile button">
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.52083C0 1.12862 1.12862 0 2.52083 0H9.85417C11.2464 0 12.375 1.12862 12.375 2.52083V17.1875C12.375 18.5797 11.2464 19.7083 9.85417 19.7083H2.52083C1.12862 19.7083 0 18.5797 0 17.1875V2.52083ZM2.52083 1.375C1.888 1.375 1.375 1.888 1.375 2.52083V17.1875C1.375 17.8204 1.888 18.3333 2.52083 18.3333H9.85417C10.487 18.3333 11 17.8204 11 17.1875V2.52083C11 1.888 10.487 1.375 9.85417 1.375H2.52083Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.4375 0C3.05781 0 2.75 0.307808 2.75 0.6875V1.60417C2.75 2.49013 3.46821 3.20833 4.35417 3.20833H8.02083C8.90679 3.20833 9.625 2.49013 9.625 1.60417V0.6875C9.625 0.307808 9.31718 0 8.9375 0H3.4375Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="header-menu_button"
            onClick={() => setIsMenuOpen(true)}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
          <div className="header-menu"></div>
        </div>
      </header>
      <nav className={`sub-header ${isMenuOpen && "active"}`}>
        <div className="container">
          <ul>
            <li className="list_item">
              <a href="#about" className="link nav-link">
                About
              </a>
            </li>
            <li className="list_item">
              <a href="#services" className="link nav-link">
                Services
              </a>
            </li>
            <li className="list_item">
              <a href="#sirius" className="link nav-link">
                Sirius
              </a>
            </li>
            <li className="list_item">
              <a href="#tariffs" className="link nav-link">
                Tariffs
              </a>
            </li>
            <li className="list_item">
              <a href="#faq" className="link nav-link">
                FAQ
              </a>
            </li>
            <li className="list_item">
              <a href="#contacts" className="link nav-link">
                Contacts
              </a>
            </li>
          </ul>
          <div className="menu-contacts">
            <div className="menu-phone_number phone_number">
              1 (234) 567-89-00
            </div>
            <button className="menu-button button">Sign in</button>
          </div>
          <button
            className="header-close_button"
            onClick={() => setIsMenuOpen(false)}
          ></button>
        </div>
      </nav>
    </>
  );
}
