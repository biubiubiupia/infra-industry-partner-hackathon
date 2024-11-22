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
      <h3 className="learnmore">Try Out Other AI From Meta</h3>
      <ul className="course-list-2">
        <li className="course-item">
          Want to hear your voice in another language? Try Language AI
        </li>
        <li className="course-item">
          Want bring your sketches to life with animations? Try Vision AI
        </li>
        <li className="course-item">
          Want to create your own moive? Try Movie Gen
        </li>
        <li className="course-item">
          Want to create your own AI bot? Try AIStudio
        </li>
        <li className="course-item">
          Want to write a persuasive blog? Try Meta AI
        </li>
      </ul>
    </div>
  )
}
