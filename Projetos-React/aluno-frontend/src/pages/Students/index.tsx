import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';
import './index.css';
import { useHistory } from 'react-router';

interface IStudent {
    id: number;
    nome: string;
    sobrenome: string;
    idade: number;
    ra: number;
    endereco: string;
    dataNascimento: Date;
    matriculado: boolean;
}

const Students: React.FC = () => {
    const [students, setStudents] = useState<IStudent[]>([]);
    const history = useHistory();

    useEffect(() => {
        loadStudents();
    }, []);

    async function loadStudents() {
        const response = await api.get('/alunos');
        setStudents(response.data);
    }

    function formatDate(date: Date) {
        return moment(date).format('DD/MM/YYYY');
    }

    function newAluno() {
        history.push('/alunos_cadastro');
    }

    return (
        <div className='container'>
            <br />
            <div className='student-header'>
                <h1>Alunos</h1>
                <Button variant='dark' size='sm' onClick={() => newAluno()}>
                    Novo Aluno
                </Button>
            </div>
            <br />
            <Table striped bordered hover className='text-center' variant='dark'>
                <thead className='thead'>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>RA</th>
                        <th>Data de Nacimento</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => {
                        return (
                            <tr>
                                <td>{student.nome + ' ' + student.sobrenome}</td>
                                <td>{student.idade}</td>
                                <td>{student.ra}</td>
                                <td>{formatDate(student.dataNascimento)}</td>
                                <td>{student.matriculado ? 'Matriculado' : 'Não Matriculado'}</td>
                                <td>
                                    <Button size='sm' variant='primary' className='me-2'>
                                        Editar
                                    </Button>
                                    <Button size='sm' variant='primary' className='me-2'>
                                        Finalizar
                                    </Button>
                                    <Button size='sm' variant='primary' className='me-2'>
                                        Visualizar
                                    </Button>
                                    <Button size='sm' variant='primary' className='me-2'>
                                        Remover
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default Students;
