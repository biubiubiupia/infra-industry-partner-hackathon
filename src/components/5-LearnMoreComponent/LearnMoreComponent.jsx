import React from "react";
import "./LearnMoreComponent.scss";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader.jsx";

export default function LearnMoreComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/aiprocesses");
  };

  const handleNext = () => {
    navigate("/feedback");
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
            <section className="learn-more">
            <h1 className="learn-more__header">Learn More</h1>
            <img className="learn-more__img" src="src/assets/images/learnmore.jpg" alt="group learning together"/>
            <div className="learn-more__content">
              <ul className="learn-more__list">
                <li className="learn-more__item">Responsible AI Use & Ethics</li>
                <li className="learn-more__item">Responsible AI Use & Ethics</li>
                <li className="learn-more__item">
                  Boost Your Creativity with Generative AI
                </li>
                <li className="learn-more__item">Advanced AI Use for FaceBook</li>
              </ul>
              <h3 className="learn-more__subheader">Try Out Other AI From Meta</h3>
              <ul className="learn-more__options">
                <li className="learn-more__option">
                  Want to hear your voice in another language? <a className="learn-more__link" href="https://seamless.metademolab.com/expressive/">Try Language AI</a>
                </li>
                <li className="learn-more__option">
                  Want bring your sketches to life with animations? <a className="learn-more__link" href="https://sketch.metademolab.com/">Try Vision AI</a>
                  
                </li>
                <li className="learn-more__option">
                  Want to create your own moive? <a className="learn-more__link" href="https://ai.meta.com/research/movie-gen/">Try Movie Gen</a>
                </li>
                <li className="learn-more__option">
                  Want to create your own AI bot? <a className="learn-more__link" href="https://ai.meta.com/ai-studio/">Try AI Studio</a>
                </li>
                <li className="learn-more__option">
                  Want to write a persuasive blog? <a className="learn-more__link" href="https://www.meta.ai/">Try Meta AI</a> 
                </li>
              </ul>
            </div>
            </section>
          </ComponentHeader>
        </div>
      </div>
    </div>
  );
}
