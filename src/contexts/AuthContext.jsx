import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {

  const [user, setUser] = useState(null);

  async function signIn(login, password) {
    const response = await api.get('/users/', {
      params: {
        login,
        password
      }
    });

    if(!response.data[0]) {
      console.log(response.data);
      setUser(null);
      console.log("Error: Authentication failed");
      return;
    }
    
    setUser(response.data[0]);
  }

  return (
    <AuthContext.Provider value={{signed:Boolean(user), user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}


