import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import WelcomeComponent from './components/1-WelcomeComponent/WelcomeComponent.jsx'
import IntroToAIComponent from './components/2-IntroToAIComponent/IntroToAIComponent.jsx'
import UseAIComponent from './components/3-UseAIComponent/UseAIComponent.jsx'
import AIProcessesComponent from './components/4-AIProcessesComponent/AIProcessesComponent.jsx'
import LearnMoreComponent from "./components/5-LearnMoreComponent/LearnMoreComponent.jsx"
import CourseFeedbackComponent from './components/6-CourseFeedbackComponent/CourseFeedbackComponent.jsx'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/welcome/*" element={<WelcomeComponent/>} />
        <Route path="/intro" element={<IntroToAIComponent/>} />
        <Route path="/aiuse" element={<UseAIComponent/>} />
        <Route path="/aiprocesses" element={<AIProcessesComponent/>} />
        <Route path="/learnmore" element={<LearnMoreComponent/>} />
        <Route path="/feedback" element={<CourseFeedbackComponent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
