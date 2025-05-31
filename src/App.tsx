import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GoalContext } from './context/GoalContext'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { SkillSelectionStep } from './components/SkillSelection/SkillSelection'

import './App.scss'
import { SkillSelectionStepTwo } from './components/SkillSelectionStepTwo/SkillSelectionStepTwo'
import EmailForm from './components/EmailForm/EmailForm'
import PersonalozedPlan from './components/PersonalozedPlan/PersonalizedPlan'

function App() {
  const [goal, setGoal] = useState<'goal1' | 'goal2' | null>(null)

  return (
    <GoalContext.Provider value={{ goal, setGoal }}>
      <BrowserRouter>
        <div className="app">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="app-wrapper">
                    <Header />
                    <main className="main-content">
                      <Main />
                    </main>
                    <Footer />
                  </div>
                }
              />
              <Route path="/goal1" element={<SkillSelectionStep />} />
              <Route path="/goal2" element={<SkillSelectionStepTwo />} />
              <Route path="/email" element={<EmailForm />} />
              <Route path="/plan" element={<PersonalozedPlan />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GoalContext.Provider>
  )
}

export default App
