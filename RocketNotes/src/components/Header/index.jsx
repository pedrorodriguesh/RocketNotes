import { Container, Profile, Logout } from './styles.js'
import { RiShutDownLine } from 'react-icons/ri'


export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/pedrorodriguesh.png" alt="Profile photo" />

        <div>
          <span>Bem-Vindo,</span>
          <strong>Pedro Henrique Rodrigues</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}