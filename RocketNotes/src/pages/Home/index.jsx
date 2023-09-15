import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { BiPlus, BiSearch } from 'react-icons/bi';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" $isactive />
                </li>
                <li>
                    <ButtonText title="Frontend" />
                </li>
                <li>
                    <ButtonText title="Node" />
                </li>
                <li>
                    <ButtonText title="React" />
                </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={BiSearch}/>
            </Search>

            <Content></Content>

            <NewNote>
                <BiPlus />
                <p>Criar Nota</p>
            </NewNote>
        </Container>
    );
}
