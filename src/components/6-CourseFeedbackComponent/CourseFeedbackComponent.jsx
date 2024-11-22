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
    <div className="page">
      <ComponentHeader
        onClose={handleClose}
        onBack={handleBack}
        onNext={handleNext}
        showBack={true} 
        showNext={false} 
      />
      <div>
      <h1>We'd love your feedback!</h1>
      <h2>Your feedback helps us improve and create more engaging experiences</h2>
      <form>
        <div>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <label>Rate your overall experience of the course
            <input
              type="radio"
              name="rateExperience"
            ></input>
          </label> 
        ))}
        </div>
       
        
        <label>Rate your experience with navigating the course pages </label>
        <label>What did you learn about AI that surprised you?
        </label>
        <input
          type="radio"
            name="rateNavigate"
        ></input>
        <label>What features of AI do you want to explore further?
        </label>
        <input></input>
        <label>How can we make this course better?</label>
        <button></button>
      </form>
      </div>
      
    </div>
  );
}

