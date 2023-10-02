import { Container, Profile, Logout } from './styles.js';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth.jsx';

import { api } from '../../services/api.js';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile to="profile">
                {' '}
                {/* Profile é outro componente que tem dentro dele uma imagem e então uma div para cuidar da orientação dos textos*/}
                <img
                    src={avatarUrl}
                    alt={user.name}
                />
                <div>
                    <span>Bem-Vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
