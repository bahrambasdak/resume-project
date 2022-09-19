import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Auth_ThemContext = createContext(undefined);

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

const Auth_ThemProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    getLocalStorage("user", { loggedIn: false, them: "light" })
  );

  useEffect(() => {
    setLocalStorage("user", user);
  }, [user]);

  const toggleAuth = () => {
    setUser((prev) => ({
      ...prev,
      loggedIn: !prev.loggedIn,
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
    <Auth_ThemContext.Provider value={value}>
      {children}
    </Auth_ThemContext.Provider>
  );
};

const useAuth_Them = () => {
  const context = useContext(Auth_ThemContext);
  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider!");
  return context;
};

export { Auth_ThemProvider, useAuth_Them };
