import React from 'react'
import WelcomeComponent from '../../components/1-WelcomeComponent/WelcomeComponent'
import IntroToAIComponent from '../../components/2-IntroToAIComponent/IntroToAIComponent'

export default function CoursePage() {
  return (
    <div>
      <ComponentHeader/>
      
      <WelcomeComponent/>
      <IntroToAIComponent/>
    </div>
  )
}
