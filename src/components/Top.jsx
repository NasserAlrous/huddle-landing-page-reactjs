import React from "react";
import logo from "../images/logo.svg";
import mockup from "../images/illustration-mockups.svg"

function TopContainer() {
  return (
  <div>
    <div class="container-fluid top-container">
      <div class="row">
        <div class="col-3 header">
          <img src={logo} alt="logo"/>
        </div>
        <div class="col-7 header">
          <button type="button" name="button" class="try-free-button">Try It Free</button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h1 class="top-text">Build The Community Your Fans Will Love</h1>
          <p class="top-text">Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
          Create connections with your users as you engage in genuine discussion.</p>
          <button type="button" name="button" class="start-free-button">Get Started For Free</button>
        </div>
        <div class="col-6">
          <img src={mockup} alt="mockups" id="mockup"/>
        </div>
      </div>
    </div>
  </div>

  );
}

export default TopContainer;
