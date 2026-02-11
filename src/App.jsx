import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComponentsPage from './pages/ComponentsPage'
import Navigation from './components/ui/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
