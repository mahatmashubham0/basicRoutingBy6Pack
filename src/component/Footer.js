import React from "react";
// import icon1 from "../style/img2.jfif";
import { AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2>Contact Us From This ---</h2>
        <h3>food@mealhere@gmail</h3>
      </div>
      <article className="footer-right">
        <div style={{animationDelay: "0.3s"}}>
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>
        <div style={{animationDelay: "0.5s"}}>
          <AiFillYoutube />
          <p>Youtube</p>
        </div>
        <div style={{animationDelay: "0.7s"}}>
          <AiFillFacebook />
          <p>FaceBook</p>
        </div>
        <div style={{animationDelay: "0.9s"}}>
          <AiFillTwitterCircle />
          <p>Twitter</p>
        </div>
      </article>
    </div>
  );
};

export default Footer;
