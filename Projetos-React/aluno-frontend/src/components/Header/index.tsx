import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div>
            <Navbar bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        Página Inicial
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/alunos'>
                            Gerenciamento de Alunos
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
