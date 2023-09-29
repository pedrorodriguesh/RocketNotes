// ### Componentes
import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
// ### Icons
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
// ### Hooks
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'; // => Deixa um componente se "lembrar" de algo, como no input de usuário e senha.
// ## Api
import { api } from '../../services/api';

export function SignUp() {
    // ### useState Hook para os 3 inputs de cadastro, user, email e password.
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); // aqui em useState(), define o valor inicial do estado.
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // ### Função onClick no botão de registrar.
    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos!');
        }

        // Método POST no endpoint '/users'.
        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!');
                navigate("/")
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar.');
                }
            });
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)} // ## => HookState, a função setName que foi determinada lá em cima aqui pega o value do input. 
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)} // ## => HookState, a função setName que foi determinada lá em cima aqui pega o value do input. 
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)} // ## => HookState, a função setName que foi determinada lá em cima aqui pega o value do input. 
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/" href="#">
                    Voltar para o Login
                </Link>
            </Form>
        </Container>
    );
}
