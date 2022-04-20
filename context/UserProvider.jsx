import React, { useContext, useState } from "react";

const UserContext = React.createContext({ user: {}, authenticated: false });

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "opps useUserContext must be wrapped in UserProvider component",
    );
  }

  return context;
};

function UserProvider({ children }) {
  const state = useState({ user: {}, authenticated: false });
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export default UserProvider;
