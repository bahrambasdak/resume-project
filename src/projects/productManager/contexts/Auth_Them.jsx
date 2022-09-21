import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthThemContext = createContext(undefined);

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log({ e });
  }
};

const getLocalStorage = (key, initialValue) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};

const AuthThemProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    getLocalStorage("user", { loggedIn: false,email:'sd', them: "light" })
  );

  useEffect(() => {
    setLocalStorage("user", user);
  }, [user]);

  const toggleAuth = (email) => {
    setUser((prev) => ({
      ...prev,
      loggedIn: !prev.loggedIn,
      email: email,
    }));
  };

  const toggleThem = () => {
    setUser((prev) => ({
      ...prev,
      them: prev.them === "light" ? "dark" : "light",
    }));
  };

  const value = { toggleAuth: toggleAuth, toggleThem: toggleThem, user };

  return (
    <AuthThemContext.Provider value={value}>
      {children}
    </AuthThemContext.Provider>
  );
};

const useAuthThem = () => {
  const context = useContext(AuthThemContext);
  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider!");
  return context;
};

export { AuthThemProvider, useAuthThem };
