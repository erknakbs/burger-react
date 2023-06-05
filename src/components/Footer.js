import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>
          &copy;2023 burger{" "}
          <Link to="https://www.erkanakbas.com.tr">erknakbs</Link>
        </p>
        <Link to="https://www.instagram.com/erknakbs">
          <FaInstagram />
        </Link>
        <Link to="https://www.twitter.com/erknakbs">
          <FaTwitter />
        </Link>
        <Link to="https://www.facebook.com/erknakbs">
          <FaFacebook />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
