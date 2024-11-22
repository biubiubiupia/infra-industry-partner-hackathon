import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';

export default function UsingAIOnFBComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleBack = () => {
    navigate('/aiprocesses'); 
  };

  const handleNext = () => {
    navigate('/feedback'); 
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
      <div className="using-ai-fb-content">
        <h1>Using AI on Facebook</h1>
      </div>
    </div>
  );
}
