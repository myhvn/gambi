"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isLoggedin: false, user: "Dark", level: 0 });
  const [width, setWidth] = useState(1200);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightbarOpen, setIsRightbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [modalType, setModalType] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRightbar = () => {
    setIsRightbarOpen(!isRightbarOpen);
  };

  const toggleModal = (type) => {
    setIsModalOpen(!isModalOpen);
    setModalType(type);
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const login = () => {
    setAuth((prevAuth) => ({ ...prevAuth, isLoggedin: true }));
    setIsModalOpen(false);
  };

  const register = () => {
    setAuth((prevAuth) => ({ ...prevAuth, isLoggedin: true }));
    console.log("Registering...");
    setIsModalOpen(false);
    
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        width,
        isSidebarOpen,
        toggleSidebar,
        isRightbarOpen,
        toggleRightbar,
        isModalOpen,
        toggleModal,
        isSearchModalOpen,
        toggleSearchModal,
        modalType,
        setModalType,
        auth,
        login,
        register,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
