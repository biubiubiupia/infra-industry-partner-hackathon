import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';

export default function UseAIComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleBack = () => {
    navigate('/intro');
  };

  const handleNext = () => {
    navigate('/aiprocesses'); 
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
      <div className="use-content">
        <h1>How to Use AI</h1>
      </div>
    </div>
  );
}
