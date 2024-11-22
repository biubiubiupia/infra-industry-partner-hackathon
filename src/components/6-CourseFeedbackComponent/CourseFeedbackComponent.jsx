import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';

export default function CourseFeedbackComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleBack = () => {
    navigate('/learnmore'); 
  };

  const handleNext = () => {
    alert('Hope you enjoyed the META tour!');
  };

  return (
    <div>
      <ComponentHeader
        onClose={handleClose}
        onBack={handleBack}
        onNext={handleNext}
        showBack={true} 
        showNext={false} 
      />
      <div className="feedback-content">
        <h1>Course Feedback</h1>
      </div>
    </div>
  );
}

