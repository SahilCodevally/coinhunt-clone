import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <ul>
          <li>
            <NavLink to="/">Disclaimer</NavLink>
          </li>
          <li>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms & conditions</NavLink>
          </li>
        </ul>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/coinhuntcc"
          style={{ cursor: "pointer" }}
        >
          <img
            width="30"
            height="30"
            alt="twitter-logo"
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
          />
        </a>
        <p>Coinhunt © {new Date().getFullYear()} - contact@coinhunt.cc</p>
      </footer>
    </div>
  );
};

export default Footer;
