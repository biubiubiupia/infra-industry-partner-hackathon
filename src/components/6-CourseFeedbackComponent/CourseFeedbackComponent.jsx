import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";
import "./CourseFeedbackComponent.scss";

export default function CourseFeedbackComponent() {
  const navigate = useNavigate();

  const [ratings, setRatings] = useState({
    questionOne: null,
    questionTwo: null,
  });

  const [responses, setResponses] = useState({
    questionThree: "",
    questionFour: "",
    questionFive: "",
  });

  const [errors, setErrors] = useState({});

  const handleRatingChange = (question, value) => {
    setRatings((prev) => ({
      ...prev,
      [question]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [question]: null,
    }));
  };

  const handleResponseChange = (question, value) => {
    setResponses((prev) => ({
      ...prev,
      [question]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [question]: null,
    }));
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/learnmore");
  };

  const handleNext = () => {
    alert("Hope you enjoyed the META tour!");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!ratings.questionOne)
      newErrors.questionOne =
        "Please rate your overall experience of the course!";
    if (!ratings.questionTwo)
      newErrors.questionTwo =
        "Please rate your experience with navigating the course pages!";
    if (!responses.questionThree.trim())
      newErrors.questionThree = "Please answer what surprised you about AI!";
    if (!responses.questionFour.trim())
      newErrors.questionFour =
        "Please answer what features of AI you want to explore further!";
    if (!responses.questionFive.trim())
      newErrors.questionFive =
        "Please provide feedback on how we can improve the course!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Ratings:", ratings);
      console.log("Responses:", responses);
      alert("Thank you for your feedback!");
      navigate("/");
    }
  };

  return (
    <div className="page">
      <div className="welcome-container">
        <div className="component-card">
          <ComponentHeader
            onClose={handleClose}
            onBack={handleBack}
            onNext={handleNext}
            showBack={true}
            showNext={true}
          >
            <div className="survey">
              <h2 className="survey__title">We'd love your feedback!</h2>
              <h3 className="survey__subtitle">
                Your feedback helps us improve and create more engaging
                experiences.
              </h3>
              <form className="survey-form" onSubmit={handleSubmit}>
                <div className="survey-form__rateExperience">
                  <div className="survey-form__rateExperience">
                    <p className="survey-form__label">
                      Rate your overall experience of the course
                    </p>
                    <div className="number-container">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <label key={num} for={`question-one-${num}`}>
                            {num}
                            <input
                              type="radio"
                              name="question-one"
                              id={`question-one-${num}`}
                              value={num}
                              onChange={(e) =>
                                handleRatingChange(
                                  "questionOne",
                                  e.target.value
                                )
                              }
                              required
                            />
                          </label>
                        )
                      )}
                    </div>
                    {errors.questionOne && (
                      <p className="error">{errors.questionOne}</p>
                    )}
                  </div>
                </div>
                <div className="survey-form__rateNavigate">
                  <p className="survey-form__label">
                    Rate your experience with navigating the course pages
                  </p>
                  <div className="number-container">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <label key={num} for={`question-two-${num}`}>
                      {num}
                      <input
                        type="radio"
                        name="question-two"
                        id={`question-two-${num}`}
                        value={num}
                        onChange={(e) =>
                          handleRatingChange("questionTwo", e.target.value)
                        }
                        required
                      />
                    </label>
                  ))}
                  </div>
                  {errors.questionTwo && (
                    <p className="error">{errors.questionTwo}</p>
                  )}
                </div>
                <div className="survey-form__questionThree">
                  <label for="question-three" className="survey-form__label">
                    What did you learn about AI that surprised you?
                  </label>
                  <input
                    type="text"
                    name="question-three"
                    id="question-three"
                    placeholder="Please enter your answer here"
                    className="survey-form__input"
                    value={responses.questionThree}
                    onChange={(e) =>
                      handleResponseChange("questionThree", e.target.value)
                    }
                  />
                  {errors.questionThree && (
                    <p className="error">{errors.questionThree}</p>
                  )}
                </div>
                <div className="survey-form__questionFour">
                  <label for="question-four" className="survey-form__label">
                    What features of AI do you want to explore further?
                  </label>
                  <input
                    type="text"
                    name="question-four"
                    id="question-four"
                    placeholder="Please enter your answer here"
                    className="survey-form__input"
                    value={responses.questionFour}
                    onChange={(e) =>
                      handleResponseChange("questionFour", e.target.value)
                    }
                  />
                  {errors.questionFour && (
                    <p className="error">{errors.questionFour}</p>
                  )}
                </div>
                <div className="survey-form__questionFive">
                  <label for="question-five" className="survey-form__label">
                    How can we make this course better?
                  </label>
                  <input
                    type="text"
                    name="question-five"
                    id="question-five"
                    placeholder="Please enter your answer here"
                    className="survey-form__input"
                    value={responses.questionFive}
                    onChange={(e) =>
                      handleResponseChange("questionFive", e.target.value)
                    }
                  />
                  {errors.questionFive && (
                    <p className="error">{errors.questionFive}</p>
                  )}
                </div>

                <button type="submit" className="survey-form__button">
                  SUBMIT
                </button>
              </form>
            </div>
          </ComponentHeader>
        </div>
      </div>
    </div>
  );
}
