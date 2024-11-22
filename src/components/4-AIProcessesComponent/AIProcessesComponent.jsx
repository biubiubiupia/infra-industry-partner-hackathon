import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';

export default function AIProcessesComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleBack = () => {
    navigate('/aiuse'); 
  };

  const handleNext = () => {
    navigate('/learnmore'); 
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
      <div className="ai-processes-content">
        <h1>AI Processes</h1>
      </div>
    </div>
  );
}
