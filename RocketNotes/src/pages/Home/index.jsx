import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { BiPlus, BiSearch } from 'react-icons/bi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { Button } from '../../components/Button';

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
                <Input placeholder="Pesquisar pelo título" icon={BiSearch} />
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note
                        data={{
                            title: 'React',
                            tags: [
                                { id: '1', name: 'react' },
                                { id: '2', name: 'nodejs'},
                                { id: '3', name: 'rocketseat'}
                            ],
                        }}
                    />
                    <Button title="Rafael Pereira"/>
                </Section>
            </Content>

                        
            <NewNote to="new">
                <BiPlus />
                <p>Criar Nota</p>
            </NewNote>

        </Container>
    );
}
