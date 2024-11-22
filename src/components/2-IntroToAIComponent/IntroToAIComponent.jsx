import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentHeader from '../0-ComponentHeader/ComponentHeader';

export default function IntroToAIComponent() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); 
  };

  const handleBack = () => {
    navigate('/welcome');
  };

  const handleNext = () => {
    navigate('/aiuse'); 
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
      <div className="intro-content">
        <h1>Introduction to AI</h1>
        <h3 className="heading">Generative AI </h3>
        <p className="paragraph">is a program that is tought how to recreate content.</p>
        <h3 className="heading">Machine learning </h3>
        <p className="paragraph">is the process through which AI are tought. This process often uses large data sets.</p>
      </div>
    </div>
  );
}
