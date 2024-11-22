import React from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeader from "../0-ComponentHeader/ComponentHeader";
import "./CourseFeedbackComponent.scss";

export default function CourseFeedbackComponent() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    };

    const handleBack = () => {
        navigate("/learnmore");
    };

    const handleNext = () => {
        alert("Hope you enjoyed the META tour!");
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
            <div className="survey">
                <h1 className="survey__title">We'd love your feedback!</h1>
                <h2 className="survey__subtitle">
                    Your feedback helps us improve and create more engaging
                    experiences
                </h2>
                <form className="survey-form">
                    <div className="survey-form__rateExperience">
                        <p className="survey-form__label">
                            Rate your overall experience of the course
                        </p>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            (num) => (
                                <label key={num} for={`question-one-${num}`}>
                                    {" "}
                                    {num}
                                    <input
                                        type="radio"
                                        name="question-one"
                                        id={`question-one-${num}`}
                                        value={num}
                                        onChange={(e) =>
                                            setRating(e.target.value)
                                        }
                                        required
                                    ></input>
                                </label>
                            )
                        )}
                    </div>
                    <div className="survey-form__rateNavigate">
                        <p>
                            Rate your experience with navigating the course
                            pages
                        </p>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            (num) => (
                                <label key={num} for={`question-two-${num}`}>
                                    {" "}
                                    {num}
                                    <input
                                        type="radio"
                                        name="question-two"
                                        id={`question-two-${num}`}
                                        value={num}
                                        onChange={(e) =>
                                            setRating(e.target.value)
                                        }
                                        required
                                    ></input>
                                </label>
                            )
                        )}
                    </div>
                    <div className="survey-form__questionThree">
                        <label
                            for="question-three"
                            className="survey-form__label"
                        >
                            What did you learn about AI that surprised you?
                        </label>
                        <input
                            type="text"
                            name="question-three"
                            id="question-three"
                            placeholder="Please enter your answer here"
                            className="survey-form__input"
                        ></input>
                    </div>
                    <div className="survey-form__questionFour">
                        <label
                            for="question-four"
                            className="survey-form__label"
                        >
                            What features of AI do you want to explore further?
                        </label>
                        <input
                            type="text"
                            name="question-four"
                            id="question-four"
                            placeholder="Please enter your answer here"
                            className="survey-form__input"
                        ></input>
                    </div>
                    <div className="survey-form__questionFive">
                        <label
                            for="question-five"
                            className="survey-form__label"
                        >
                            How can we make this course better?
                        </label>
                        <input
                            type="text"
                            name="question-five"
                            id="question-five"
                            placeholder="Please enter your answer here"
                            className="survey-form__input"
                        ></input>
                    </div>

                    <button className="survey-form__button">
                        Submit your survey
                    </button>
                </form>
            </div>
        </div>
    );
}
