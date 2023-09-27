import { createContext, useContext } from 'react';

export const AuthContext = createContext({})

export function AuthProvider ({ children }){
    return (
        <AuthContext.Provider value={{ name: 'Pedro', email: 'pedro@email.com'}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context
}