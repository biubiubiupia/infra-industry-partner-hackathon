

function CourseFeedbackComponent() {
  return (
    <div className="page">
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
  )
};

export default CourseFeedbackComponent;
