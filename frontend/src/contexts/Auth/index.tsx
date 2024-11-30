import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User } from "../../interfaces/user";

interface AuthContextData {
  userId: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  async function loginUser(login: string, password: string): Promise<User | undefined> {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }
  

  const login = async (username: string, password: string) => {
    try {
      const user = await loginUser(username, password);

      if (user) {
        setUserId(user.userid);
        localStorage.setItem("userId", user.userid);
      }
    } catch {
      console.error('failed to login');
    }
  };

  async function registerUser(login: string, password: string) {
    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register user");
      }
  
      const user = await response.json();
      console.log("User registered:", user);
      return user;
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  const register = async (username: string, password: string) => {
    try {
      const user = await registerUser(username, password);

      if (user) {
        setUserId(user.userid);
        localStorage.setItem("userId", user.userid);
      }
    } catch {
      console.error('failed to login');
    }
  };
  

  const logout = () => {
    setUserId(null);
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
