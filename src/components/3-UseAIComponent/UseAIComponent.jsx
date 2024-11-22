import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";

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
    <div>
      <div className="welcome-container">
        <div className="component-card">
          <ComponentHeader
            onClose={handleClose}
            onBack={handleBack}
            onNext={handleNext}
            showBack={true}
            showNext={true}
          ></ComponentHeader>

          <h1>Discover the Power of AI on Facebook</h1>
          <p>
            You might be surprised at how many ways you can use AI right inside
            Facebook! From creating engaging content to personalizing your
            experience, AI-powered tools are integrated throughout the platform.
          </p>
          <h2>AI-Powered Tools for Enhancing Your Facebook Experience</h2>
          <p>
            Here are some examples of AI-powered tools you can use on Facebook:
          </p>
          <ul>
            <li>
              <strong>Text Creation:</strong> AI can assist with writing posts
              or captions, saving you time and effort.
            </li>
            <li>
              <strong>Image Processing:</strong> AI-powered image processing
              helps improve the quality and look of your photos.
            </li>
            <li>
              <strong>Language Tools:</strong> Translate posts or comments
              instantly, breaking down language barriers and connecting you with
              a global community.
            </li>
          </ul>
          <h2>AI Features Integrated Throughout Facebook</h2>
          <p>
            In addition to these AI-powered tools, Facebook also integrates AI
            features in many different ways. Here are a few examples:
          </p>
          <ul>
            <li>
              <strong>Smart Suggestions:</strong> AI suggests friends, groups,
              and content based on your interests, helping you discover new
              things and connect with like-minded people.
            </li>
            <li>
              <strong>Content Moderation:</strong> AI helps identify potentially
              harmful content, which is then reviewed by human moderators to
              ensure the platform remains safe and respectful.
            </li>
            <li>
              <strong>Personalized Ads:</strong> AI helps tailor ads to your
              interests and preferences, based on your activity on Facebook and
              other factors.
            </li>
          </ul>
          <h2>Try Out AI Tools on Facebook</h2>
          <p>
            Ready to see AI in action on Facebook? Here are some suggestions to
            get you started:
          </p>
          <ul>
            <li>Use AI-generated caption suggestions for your posts.</li>
            <li>
              Translate posts with a single click to connect with people who
              speak different languages.
            </li>
            <li>
              Explore AI-generated recommendations for friends, groups, and
              content.
            </li>
          </ul>
          <p>
            Have fun experimenting with these AI tools, and discover how they
            can enhance your Facebook experience!
          </p>
        </div>
      </div>
    </div>
  );
}