import { StrictMode } from 'react'
import App from './App.tsx'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { TestPage } from './pages/TestPage'
import { PersonlizedPlan } from './pages/PersonlizedPlan/index.tsx'
import { ConfirmationPage } from './pages/ConfirmationPage'
import { GoalProvider } from './context/GoalProvider.tsx'

export const Root = () => {
  return (
    <StrictMode>
      <GoalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<WelcomePage />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="test" element={<TestPage />} />
              <Route path="confirmation" element={<ConfirmationPage />} />
              <Route path="results" element={<PersonlizedPlan />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </GoalProvider>
    </StrictMode>
  )
}
