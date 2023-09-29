import { Container, Profile, Logout } from './styles.js';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth.jsx';

export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to="profile">
                {' '}
                {/* Profile é outro componente que tem dentro dele uma imagem e então uma div para cuidar da orientação dos textos*/}
                <img
                    src="https://github.com/pedrorodriguesh.png"
                    alt="Profile photo"
                />
                <div>
                    <span>Bem-Vindo,</span>
                    <strong>Pedro Henrique Rodrigues</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
