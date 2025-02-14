import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './features/home'
import About from './features/about'
import NotFound from './features/not-found'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Container from './layouts/Container'
import { ProtectedRoute } from './components/ProtectedRoute'
import Profile from './users/Profile'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
