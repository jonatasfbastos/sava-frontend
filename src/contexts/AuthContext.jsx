import { createContext, useState } from "react";
import api from "../services/api";

// cria e exporta o context
export const AuthContext = createContext({});

// cria e exporta o Context Provider
// o Provider disponibiliza informações para os components
// que estão dentro dele
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
      setUser(null);
      console.log("Error: Authentication failed");
      return false;
    }
    
    setUser(response.data[0]);

    return true;
  }

  return (
    <AuthContext.Provider value={{signed:Boolean(user), user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}


