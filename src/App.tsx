import { Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Workbook from './pages/Workbook'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/workbook" element={<Workbook />} />
      </Routes>
    </div>
  )
}
