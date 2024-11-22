import "./HomePage.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import AILogo from "../../assets/logos/meta-ai-logo.png";

export default function HomePage() {

  return (
    <main className="homepage">
        <div className="messenger">
          <NavLink to="/welcome">
            <button className="prompt">
            <img src={AILogo} alt="Meta AI Logo" className="prompt__logo" />
            <p className="prompt__text">
              Explore<br></br>Meta AI
            </p>
          </button>
          </NavLink>
        </div>
    </main>
  );
}
