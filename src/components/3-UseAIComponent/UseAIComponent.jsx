import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";
import "./UseAIComponent.scss";

export default function UseAIComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/intro");
  };

  const handleNext = () => {
    navigate("/aiprocesses");
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
              <h1 className="cards__header">
                Discover the Power of AI on Facebook
              </h1>
              <div className="cards__card">
       
                <div className="cards__content">
                  <div className="cards__description">
                    <p className="cards__details">
                      You might be surprised at how many ways you can use AI
                      right inside Facebook! From creating engaging content to
                      personalizing your experience, AI-powered tools are
                      integrated throughout the platform.
                    </p>
                  </div>
                </div>

                <div className="cards__content">
                <img
                    className="cards__img"
                    src="src/assets/images/ai-gears-diagram.jpg"
                    alt="translation picture"
                  />
                  <div className="cards__description">
                    <h2 className="cards__subheader">
                      AI-Powered Tools for Enhancing Your Facebook Experience
                    </h2>
                    <p className="cards__details">
                      Here are some examples of AI-powered tools you can use on
                      Facebook:
                    </p>
                    <ul className="cards__details">
                      <li className="cards__details">
                        <strong>Text Creation:</strong> AI can assist with
                        writing posts or captions, saving you time and effort.
                      </li>
                      <li className="cards__details">
                        <strong>Image Processing:</strong> AI-powered image
                        processing helps improve the quality and look of your
                        photos.
                      </li>
                      <li className="cards__details">
                        <strong>Auto-Translate:</strong> Translate posts or
                        comments instantly, breaking down language barriers and
                        connecting you with a global community.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="cards__content">
                <img
                    className="cards__img"
                    src="src/assets/images/smart-suggestions.jpg"
                    alt="diagram of social media suggested content"
                  />
                  <div className="cards__description">
                    <h2 className="cards__subheader">
                      AI Features Integrated Throughout Facebook
                    </h2>
                    <p className="cards__details">
                      In addition to these AI-powered tools, Facebook also
                      integrates AI features in many different ways. Here are a
                      few examples:
                    </p>
                    <ul className="cards__details">
                      <li className="cards__details">
                        <strong>Smart Suggestions:</strong> AI suggests friends,
                        groups, and content based on your interests, helping you
                        discover new things and connect with like-minded people.
                      </li>
                      <li className="cards__details">
                        <strong>Content Moderation:</strong> AI helps identify
                        potentially harmful content, which is then reviewed by
                        human moderators to ensure the platform remains safe and
                        respectful.
                      </li>
                      <li className="cards__details">
                        <strong>Personalized Ads:</strong> AI helps tailor ads
                        to your interests and preferences, based on your
                        activity on Facebook and other factors.
                      </li>
                    </ul>
                  </div>
                </div>



                <div className="cards__content">
                <img
                    className="cards__img"
                    src="src/assets/images/translate.jpg"
                    alt="translation picture"
                  />
                  <div className="cards__description">
                    <h2 className="cards__subheader">
                      Try Out AI Tools on Facebook
                    </h2>
                    <p className="cards__details">
                      Ready to see AI in action on Facebook? Here are some
                      suggestions to get you started:
                    </p>
                    <ul className="cards__details">
                      <li className="cards__details">
                        <strong>1. Use AI-generated caption suggestions for your posts.</strong>
                      </li>
                      <li className="cards__details">
                        <strong>2. Translate posts with a single click to connect with
                        people who speak different languages.</strong>
                      </li>
                      <li className="cards__details">
                        <strong>3. Explore AI-generated recommendations for friends,
                        groups, and content.</strong>
                      </li>
                    </ul>
                    <p className="cards__details">
                      Have fun experimenting with these AI tools, and discover
                      how they can enhance your Facebook experience!
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
