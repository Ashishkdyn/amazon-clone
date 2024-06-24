import React from "react";
import css from "../css modules/Footer.module.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press Releases</a>
            </li>
            <li>
              <a href="#">Amazon Cares</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="#">Sell on Amazon</a>
            </li>
            <li>
              <a href="#">Sell under Amazon Accelerator</a>
            </li>
            <li>
              <a href="#">Amazon Global Selling</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Returns Centre</a>
            </li>
            <li>
              <a href="#">100% Purchase Protection</a>
            </li>
            <li>
              <a href="#">Amazon App Download</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <a href="#" className={css.amazonATag}>
            <img src="/amazon-logo3.png" alt="Amazon Logo" />
            <span className={css.dotInSpan}>.in</span>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2024, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;
