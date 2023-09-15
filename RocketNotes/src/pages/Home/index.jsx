import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <ButtonText title="Todos" isActive />
                <ButtonText title="Frontend" />
                <ButtonText title="Node" />
                <ButtonText title="React" />
            </Menu>

            <Search></Search>

            <Content></Content>

            <NewNote></NewNote>
        </Container>
    );
}
