// Services/usecontext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([]); // State for user data
  const [contentData, setContentData] = useState([]); // State for content data
  const [loading, setLoading] = useState(true); // State for loading

  return (
    <AppContext.Provider
      value={{
        userData,
        contentData,
        loading,
        setUserData,
        setContentData,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
