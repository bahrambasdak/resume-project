import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext(undefined);

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
    getLocalStorage("user", { loggedIn: false, email: "" })
  );
  console.log("Auth");
  useEffect(() => {
    console.log("Auth useEffect");
    setLocalStorage("user", user);
  }, [user]);

  const toggleAuth = useCallback(
    (email) =>
      setUser((prev) => ({
        ...prev,
        loggedIn: !prev.loggedIn,
        email: email,
      })),
    []
  );

  const value = useMemo(
    () => ({ toggleAuth: toggleAuth, user }),
    [toggleAuth, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  console.log("useAuth");
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider!");
  return context;
};

export { AuthProvider, useAuth };
