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
            <div className="welcome-container">
      <div className="component-card">
        <ComponentHeader
          onClose={handleClose}
          onBack={handleBack}
          onNext={handleNext}
          showBack={true}
          showNext={true}
        >
          <h1>UseAIComponent</h1>
          
        </ComponentHeader>
      </div>
    </div>
    </div>
  );
}
