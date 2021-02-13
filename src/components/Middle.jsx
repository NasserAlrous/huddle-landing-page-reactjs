import React from "react";
import growth from "../images/illustration-grow-together.svg";
import flow from "../images/illustration-flowing-conversation.svg";
import users from "../images/illustration-your-users.svg";

function MiddleContainer() {
  return (
    <div>
      <div class="container-fluid middle-container">
        <div class="row">
          <div class="card-design first-card">
          <div class="col-lg-6 col-sm-12">
              <h3>Grow Together</h3>
              <p>Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={growth} alt="grow-together" id="grow-img" class="card-img" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card-design second-card">
          <div class="col-lg-6 col-sm-12">
              <h3>Flowing Conversations</h3>
              <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads
              have just-in-time loading for a more natural flow.</p>
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={flow} alt="flowing-conversation" id="flowing-img" class="card-img" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card-design third-card">
          <div class="col-lg-6 col-sm-12">
              <h3>Your Users</h3>
              <p>It takes no time at all to integrate Huddle with your app's authentication solution.
              This means, once signed in to your app, your users can start chatting immediately.</p>
            </div>
            <div class="col-lg-6 col-sm-12">
              <img src={users} alt="your-users" id="flowing-img" class="card-img" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="community-card">
          <div class="col-lg-12 col-sm-12">
            <h3>Ready To Build Your Community?</h3>
            <button type="button" name="button" class="start-free-button">Get Started For Free</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MiddleContainer;
