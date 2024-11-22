import "./HomePage.scss"
import React from 'react'
import AILogo from "../../assets/"

export default function HomePage() {
  return (
    <main className="page">
      <div className="page__overlay">
        <div className="messenger">
          <button className="prompt">
            <span><AILogo /></span>
            <span className="button-text">Meta AI</span>
          </button>
        </div>
      </div>
    </main>
  )
}