import { createContext, useState } from "react";
import api from "../services/api";

// cria e exporta o context
export const AuthContext = createContext({});

// cria e exporta o Context Provider
// o Provider disponibiliza informações para os components
// que estão dentro dele
export function AuthContextProvider({children}) {

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

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

  async function authenticateOnlyLogin(login) {
    const response = await api.get('/users/', {
      params: {
        login
      }
    });

    if(!response.data[0]) {
      console.log("Error: Check Login failed");
      return false;
    }

    setUserId(response.data[0].id);

    return true;
  }

  function signOut() {
    setUserId(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed:Boolean(user),
        user,
        signIn,
        authenticateOnlyLogin,
        userId,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


