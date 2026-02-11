// AppRoutes component for React Router setup
// This will be used once react-router-dom is installed

import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'
import ComponentsPage from '../pages/ComponentsPage.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/components" element={<ComponentsPage />} />
      
      {/* Future routes will be added here:
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      */}
    </Routes>
  )
}

export default AppRoutes
