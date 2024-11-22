import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";
import "./WelcomeComponent.scss";

export default function WelcomeComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/welcome");
  };

  const handleNext = () => {
    navigate("/intro");
  };

  return (
    <div className="page">
      <div className="welcome-container">
        <div className="component-card">
          <ComponentHeader
            onClose={handleClose}
            onBack={handleBack}
            onNext={handleNext}
            showBack={true}
            showNext={true}
          >
            <section className="welcome-card">
              <h1 className="welcome-card__header">Step Into the World of AI</h1>
              <p className="welcome-card__details">
                Discover how Artificial Intelligence (AI) is transforming the
                way you connect, share, and experience the digital world. Get
                ready to uncover the magic behind the tools that power your
                Facebook journey!
              </p>

              <h2 className="welcome-card__subheader" >What Awaits You?</h2>
              <div className="welcome-card__container">
              <div className="welcome-card__card">
                <img  className="welcome-card__img" src="src/assets/images/welcome_1.jpg"/>
              <h3 className="welcome-card__card-title">Unlock the Basics of AI</h3>
              </div>
              <div className="welcome-card__card">
                <img className="welcome-card__img" src="src/assets/images/welcome_2.jpg"/>
              <h3 className="welcome-card__card-title">Dive Into the Tech Behind the Magic</h3>
              </div>
              <div className="welcome-card__card">
              <img className="welcome-card__img" src="src/assets/images/welcome_3.jpg"/>
              <h3 className="welcome-card__card-title">See How Meta’s AI Enhances Your Everyday Life</h3>
              </div>
              <div className="welcome-card__card">
              <img className="welcome-card__img" src="src/assets/images/welcome_4.jpg"/>
              <h3 className="welcome-card__card-title"> Start Your Journey to Master AI Today!</h3>
              </div>
              </div>
            </section>
          </ComponentHeader>
        </div>
      </div>
    </div>
  );
}
