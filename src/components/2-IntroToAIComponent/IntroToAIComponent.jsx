import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";
import "./IntroToAIComponent.scss";

export default function IntroToAIComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/welcome");
  };

  const handleNext = () => {
    navigate("/aiuse");
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
            <section className="cards">
              <h1 className="cards__header">Introduction to AI</h1>
              <div className="intro__box">
                <div className="intro__card">
                  <h3 className="intro__subheader">Definition of AI </h3>
                  <img
                    className="intro__image"
                    src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?t=st=1732298966~exp=1732302566~hmac=8f2e9dfe49125462b8912f72347e9c8ea4dd8b801f1df3311d0b343bfb371ad7&w=1480"
                  ></img>
                  <p className="intro__paragrah">
                    Artificial Intelligence (AI) refers to computer systems that
                    can perform tasks that typically require human intelligence,
                    such as learning, problem-solving, and decision-making.
                  </p>
                </div>
                <div className="intro__card">
                  <h3 className="intro__subheader">Types of AI</h3>
                   <img
                    className="intro__image"
                    src="https://media.wired.com/photos/64125850412651fa6ee1479c/master/pass/AI-Powered-Future-of-Sound-Culture-1439768811.jpg"
                  ></img>
                  <p className="intro__paragrah">
                    There are two primary types of AI:<br></br>Narrow AI
                    (focused on a specific task) and General AI (capable of
                    performing any intellectual task). Most AI systems used
                    today are Narrow AI.
                  </p>
                </div>
                <div className="intro__card">
                  <h3 className="intro__subheader">How AI Works</h3>
                  <img
                    className="intro__image"
                    src="https://leonfurze.com/wp-content/uploads/2023/09/purple_pink_blue_wave_forms_synthwave_audio_black_ba_6b55753c-f62c-48d2-9c4f-7c90c06c6296.png"
                  ></img>
                  <p className="intro__paragrah">
                    AI systems rely on algorithms, data, and computing power to
                    learn from experience and improve their performance over
                    time.
                  </p>
                </div>
                <div className="intro__card">
                  <h3 className="intro__subheader">AI Applications</h3>
                  <img
                    className="intro__image"
                    src="https://img.freepik.com/premium-vector/ai-technology-concept-artificial-intelligence-blue-purple-dots-lines-digital-communication-science-networks_322958-3322.jpg"
                  ></img>
                  <p className="intro__paragrah">
                    AI is used in various applications, including virtual
                    assistants, image recognition, natural language processing,
                    and predictive analytics. On Facebook, AI is used to
                    personalize your news feed, detect spam, and provide
                    features like facial recognition.
                  </p>
                </div>
              </div>
            </section>
          </ComponentHeader>
        </div>
      </div>
    </div>
  );
}
