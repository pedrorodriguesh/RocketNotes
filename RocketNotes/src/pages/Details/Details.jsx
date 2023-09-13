import { Container, Links } from './styles';

{/* Imports Componentes */}
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return (
        <Container>
            <Header></Header>

            <ButtonText title="Excluir Nota" />

            <Section title="Links úteis">
                <Links>
                    <li>
                        <a href="#">https://www.github.com/pedrorodriguesh</a>
                    </li>
                    <li>
                        <a href="#">https://rocketseat.com.br/</a>
                    </li>
                </Links>
            </Section>

            <Section title="Marcadores">
                <Tag title="Express" />
                <Tag title="Nodejs" />
            </Section>

            <Button title="Voltar" />
        </Container>
    );
}
