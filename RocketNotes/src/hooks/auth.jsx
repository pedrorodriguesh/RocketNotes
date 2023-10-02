// ## Importando Hooks do react, context, state, effect.
import { createContext, useContext, useState, useEffect } from 'react';
// ## Importando API para utilizar na função de SignIn
import { api } from '../services/api';

export const AuthContext = createContext({}); // ## Criando o contexto de autenticação.

export function AuthProvider({ children }) {
    const [data, setData] = useState({}); // + 1 estado que vai guardar os dados do usuário e o token de autenticação.

    // ## Função que vai fazer o post no endpoint /sessions da API.
    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            
            const { user, token } = response.data;

            // ## Salvando os dados no local storage.
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user)); // user é um objeto, aqui o JSON.strigify formata para um texto.
            localStorage.setItem('@rocketnotes:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token }); // função do useState guardando, dentro da variável "data" as informações.
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível entrar!');
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@rocketnotes:token');
        localStorage.removeItem('@rocketnotes:user');

        setData({});
    }

    async function updateProfile({ user }) {
        try {
            await api.put('/users', user);
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user));

            setData({ user, token: data.token });
            alert('Perfil atualizado!')
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível atualizar os dados do perfil!');
            }
        }
    }

    useEffect(() => {
        // ### PEGANDO os dados que foram salvados no localStorage
        const token = localStorage.getItem('@rocketnotes:token');
        const user = localStorage.getItem('@rocketnotes:user');

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // ### Aqui eu estou preenchendo o estado "data" novamente, dessa vez, com os dados que estavam salvos no localStorage.
            setData({
                token,
                user: JSON.parse(user), // voltando o user para um objeto JSON, depois de ter transformado em string lá em cima.
            });
        }
    }, []);

    return (
        <AuthContext.Provider // aqui tá devolvendo o provider, que encapsulára as rotas da aplicação, lá no main.jsx.
            value={{
                signIn,
                signOut,
                updateProfile,
                user: data.user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
