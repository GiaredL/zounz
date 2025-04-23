import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./features/home";
import About from "./features/about";
import NotFound from "./features/not-found";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Container from "./layouts/Container";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Profile from "./users/Profile";
import { SearchProvider } from "./context/SearchContext";
import { APIProvider } from "@vis.gl/react-google-maps";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <APIProvider apiKey={"AIzaSyB4AgAh7QdWCewnW6rewaOlpKd_uDAgAI8"}>
            <Container>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Container>
          </APIProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
