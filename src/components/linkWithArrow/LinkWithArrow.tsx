import "./style.css";

export function LinkWithArrow() {
  return (
    <div className="link-with-arrow">
      Find out more in your personal account
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_704)">
          <path
            d="M7.37875 2.45858L8.63652 0.992676L14.2255 6.59623C14.9956 7.36831 14.9929 8.64935 14.2199 9.4234L8.64342 15.0075L7.38647 13.5408L12.9127 8.00698L7.37875 2.45858Z"
            fill="#2741D0"
          />
          <path
            d="M1.14441e-05 6.99854H12.9474V8.99795H1.14441e-05V6.99854Z"
            fill="#2741D0"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_704">
            <rect
              width="14.8014"
              height="16"
              fill="white"
              transform="matrix(-1 0 0 1 14.8014 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
