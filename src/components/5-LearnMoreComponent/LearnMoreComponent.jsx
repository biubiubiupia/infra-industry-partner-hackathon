import React from 'react'
import ComponentHeader from '../0-ComponentHeader/ComponentHeader'

export default function LearnMoreComponent() {
  return (
    <div>
      <ComponentHeader />
      <h1 className="heading">Learn More</h1>
      <h3 className="learnmore">Check Out These Courses & Get Involved</h3>
      <ul className="course-list">
        <li className="course-item">
          Responsible AI Use & Ethics
        </li>
        <li className="course-item">
          Boost Your Creativity with Generative AI
        </li>
        <li className="course-item">
          Advanced AI Use for FaceBook
        </li>
      </ul>
    </div>
  )
}
