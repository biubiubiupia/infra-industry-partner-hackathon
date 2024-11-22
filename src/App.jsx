import './App.scss'
import WelcomeComponent from './components/1-WelcomeComponent/WelcomeComponent'
import IntroToAIComponent from './components/2-IntroToAIComponent/IntroToAIComponent'
import UseAIComponent from './components/3-UseAIComponent/UseAIComponent'
import AIProcessesComponent from './components/4-AIProcessesComponent/AIProcessesComponent'
import LearnMoreComponent from "./components/5-LearnMoreComponent/LearnMoreComponent"
import Feedback from './pages/Feedback/Feedback'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/welcome" element={<WelcomeComponent/>} />
        <Route path="/intro" element={<IntroToAIComponent/>} />
        <Route path="/aiuse" element={<UseAIComponent/>} />
        <Route path="/aiprocesses" element={<AIProcessesComponent/>} />
        <Route path="/learnmore" element={<LearnMoreComponent/>} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
