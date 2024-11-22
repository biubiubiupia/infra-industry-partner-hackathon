import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";

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
            <h1>IntroToAIComponent</h1>
          </ComponentHeader>
        </div>
      </div>
    </div>
  );
}
