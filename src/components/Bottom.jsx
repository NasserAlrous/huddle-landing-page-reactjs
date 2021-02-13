import React from "react";
import logo from "../images/logoFooter.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

function BottomContainer() {
  return (
    <div>
      <div class="container-fluid bottom-container">
        <div class="row">
          <div class="col-lg-4 col-sm-12 left-side">
            <img src={logo} alt="logo" id="footer-logo" />
            <div class="icon"><img src={location} alt="location" /></div>
            <div class="icon-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua</p></div>
            <div class="icon"><img src={phone} alt="phone" /></div>
            <div class="icon-content"><p>+1-543-123-4567</p></div>
            <div class="icon"><img src={email} alt="email" /></div>
            <div class="icon-content"><p>example@huddle.com</p></div>
            </div>
            <div class="col-lg-3 col-sm-12">
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">What We Do</a></li>
                <li><a href="">FAQ</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-12">
              <ul>
                <li><a href="">Career</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}

export default BottomContainer;
