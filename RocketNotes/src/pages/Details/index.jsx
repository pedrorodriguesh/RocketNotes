import { Container, Links, Content } from './styles';

// ### Importando Componentes
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';

export function Details() {
    return (
        <Container>
            <Header></Header>

            <main>
                <Content>
                    <ButtonText title="Excluir Nota" />

                    <h1>Introdução ao React</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Esse quibusdam amet nam deleniti enim neque
                        dolorem, asperiores quidem ad maiores quaerat,
                        cupiditate, eveniet earum mollitia nulla ipsam fugiat
                        porro minus.
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li>
                                <a href="#">
                                    https://www.github.com/pedrorodriguesh
                                </a>
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
                </Content>
            </main>
        </Container>
    );
}
