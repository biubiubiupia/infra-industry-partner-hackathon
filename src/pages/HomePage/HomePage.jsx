import "./HomePage.scss"
import React from 'react'
import AILogo from "../../assets/logos/meta-ai-logo.png"

export default function HomePage() {
  return (
    <main className="page">
      <div className="page__overlay">
        <div className="messenger">
          <button className="prompt">
            <img src={AILogo} alt="Meta AI Logo" className="prompt__logo"/>
            <span className="prompt__text">Explore Meta AI</span>
          </button>
        </div>
      </div>
    </main>
  )
}