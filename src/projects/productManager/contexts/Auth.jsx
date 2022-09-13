import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Authcontext = createContext(undefined);

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

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    getLocalStorage("user", { loggedIn: false })
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

  const value = { toggleAuth: toggleAuth, user };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};

const useAuth = () => {
  const context = useContext(Authcontext);
  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider!");
  return context;
};

export { AuthProvider, useAuth };
