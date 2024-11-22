import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";
import './AIProcessesComponent.scss'

export default function AIProcessesComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/aiuse");
  };

  const handleNext = () => {
    navigate("/learnmore");
  };

  return (
    <div>
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
             <h1 className="cards__header">Behind the Scenes of AI</h1>
              <div className="cards__card">
                <div className="cards__content">
                  <img className="cards__img" src="src/assets/images/How_AI_Learns.jpg" alt ="diagram of AI relations"/>
                  <div className="cards__description">
                  <h2 className="cards__subheader">How AI Learns ?</h2>
                  <div className="cards__body">
                    <p className="cards__details">
                      AI operates like a supercharged detective, uncovering
                      patterns in vast oceans of data. Through techniques like
                      machine learning and deep learning, it "trains" on this
                      data, recognizing relationships, trends, and anomalies. For example;
                    </p>
                    <p className="cards__details">
                      <strong>Prediction:</strong> In healthcare, AI can predict
                      patient outcomes by analyzing historical medical data.
                    </p>
                    <p className="cards__details">
                      <strong>Creativity:</strong> In art and writing, AI can
                      generate realistic images or coherent text by
                      understanding the structure of existing works. AI doesn’t
                      just mimic human decision-making—it improves as it
                      encounters more data, continually refining its
                      understanding to become more accurate and versatile.
                    </p>
                    </div>
                  </div>
                </div>

                <div className="cards__content">
                   <img className="cards__img" src="src/assets/images/privacy.jpg" alt="image with data secure logos"/>
                  <div className="cards__description">
                  <h2 className="cards__subheader">Privacy Matters</h2>
                  <div className="cards__body">
                    <p className="cards__details">
                      AI’s power comes with responsibility, especially
                      concerning data privacy. To ensure your information is
                      safe:
                    </p>
                    <h3 className="cards__subtitle">Anonymization</h3>
                    <p className="cards__details">
                      Before processing, AI strips away identifiable details,
                      focusing only on trends and patterns, not individuals.
                    </p>
                    <h3 className="cards__subtitle">Encryption</h3>
                    <p className="cards__details">
                      Reputable organizations follow strict guidelines to ensure
                      data is used responsibly and transparently. This means
                      your personal data remains confidential, even as AI
                      systems work to enhance your experience.
                    </p>
                  </div>
                  </div>
                </div>

                <div className="cards__content">
                <img className="cards__img" src="src/assets/images/Real_time_data.jpg" alt="image with data secure logos"/>
                <div className="cards__description">
                  <h2 className="cards__subheader">Real-Time Processing</h2>
                  <div className="cards__body">
                    <p className="cards__details">
                      AI's lightning-fast algorithms allow it to process data
                      instantaneously. This is why:
                    </p>
                    <h3 className="cards__subtitle">Streaming Services</h3>
                    <p className="cards__details">
                      Can suggest your next favorite movie while you’re still
                      watching the current one.
                    </p>
                    <h3 className="cards__subtitle">Chatbots</h3>
                    <p className="cards__details">
                      Provide immediate, relevant responses during customer
                      service interactions.
                    </p>
                    <h3 className="cards__subtitle">Navigation Apps</h3>
                    <p className="cards__details">
                      Recalculate routes within seconds of detecting traffic
                      changes. Real-time processing ensures seamless
                      interactions, making AI an invaluable tool for instant
                      decision-making and personalization.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ComponentHeader>
        </div>
      </div>
    </div>
  );
}
