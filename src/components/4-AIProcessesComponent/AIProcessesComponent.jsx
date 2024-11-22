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
             <h1>Behind the Scenes of AI</h1>
              <div className="card">
                <div className="card__content">
                  <h2 className="card__title">How AI Learns</h2>
                  <div className="card__body">
                    <p>
                      AI operates like a supercharged detective, uncovering
                      patterns in vast oceans of data. Through techniques like
                      machine learning and deep learning, it "trains" on this
                      data, recognizing relationships, trends, and anomalies.
                    </p>
                    <p>
                      <strong>Prediction:</strong> In healthcare, AI can predict
                      patient outcomes by analyzing historical medical data.
                    </p>
                    <p>
                      <strong>Creativity:</strong> In art and writing, AI can
                      generate realistic images or coherent text by
                      understanding the structure of existing works. AI doesn’t
                      just mimic human decision-making—it improves as it
                      encounters more data, continually refining its
                      understanding to become more accurate and versatile.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card__title">Privacy Matters</h2>
                  <div className="card__body">
                    <p>
                      AI’s power comes with responsibility, especially
                      concerning data privacy. To ensure your information is
                      safe:
                    </p>
                    <h3 className="card__subtitle">Anonymization</h3>
                    <p>
                      Before processing, AI strips away identifiable details,
                      focusing only on trends and patterns, not individuals.
                    </p>
                    <h3 className="card__subtitle">Encryption</h3>
                    <p>
                      Reputable organizations follow strict guidelines to ensure
                      data is used responsibly and transparently. This means
                      your personal data remains confidential, even as AI
                      systems work to enhance your experience.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h2 className="card__title">Real-Time Processing</h2>
                  <div className="card__body">
                    <p>
                      AI's lightning-fast algorithms allow it to process data
                      instantaneously. This is why:
                    </p>
                    <h3 className="card__subtitle">Streaming Services</h3>
                    <p>
                      Can suggest your next favorite movie while you’re still
                      watching the current one.
                    </p>
                    <h3 className="card__subtitle">Chatbots</h3>
                    <p>
                      Provide immediate, relevant responses during customer
                      service interactions.
                    </p>
                    <h3 className="card__subtitle">Navigation Apps</h3>
                    <p>
                      Recalculate routes within seconds of detecting traffic
                      changes. Real-time processing ensures seamless
                      interactions, making AI an invaluable tool for instant
                      decision-making and personalization.
                    </p>
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
