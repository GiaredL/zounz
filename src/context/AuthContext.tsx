import { createContext, useState, ReactNode, useEffect } from "react";
import { ITestUsers } from "../types/models/ITestUsers";
import api from "../api/config";

interface AuthContextType {
  isAuthenticated: boolean;
  user: ITestUsers | null;
  loading: boolean;
  login: (userData: ITestUsers) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<ITestUsers | null>(null);
  const [loading, setLoading] = useState(true);

  // Check session status on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await api.get("/session/check");
        if (response.data && response.data.authenticated) {
          setIsAuthenticated(true);
          setUser(response.data.user);
        }
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (userData: ITestUsers) => {
    try {
      const response = await api.post("/session/signin", {
        userName: userData.username,
        password: userData.password,
      });

      if (response.data && response.data.user) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post("/session/signout");
    } finally {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
