import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './features/home'
import About from './features/about'
import NotFound from './features/not-found'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
