import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';

export default function WelcomeComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleBack = () => {
    navigate('/welcome');
  };

  const handleNext = () => {
    navigate('/intro'); 
  };

  return (
    <div>
      <ComponentHeader
        onClose={handleClose}
        onBack={handleBack}
        onNext={handleNext}
        showBack={true}
        showNext={true}
      />
      <div className="welcome-content">
        <h1>Welcome Component</h1>
      </div>
    </div>
  );
}
