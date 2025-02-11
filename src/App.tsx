import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './features/home'
import About from './features/about'
import NotFound from './features/not-found'
import SignIn from './auth/SignIn'
import Dashboard from './features/Dashboard'
import SignUp from './auth/SignUp'
import { ProtectedRoute } from './components/ProtectedRoute'
import Container from './layouts/Container'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
