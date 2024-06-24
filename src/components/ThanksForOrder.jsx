import React from "react";

function ThanksForOrder() {
  return (
    <div className="container">
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
        <div className="animation">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ThanksForOrder;
