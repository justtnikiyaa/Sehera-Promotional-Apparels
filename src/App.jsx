import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import OurWork from './pages/OurWork'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Navigate to="/products" replace />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/clients" element={<Navigate to="/contact" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
