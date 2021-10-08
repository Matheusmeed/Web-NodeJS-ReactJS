import React, { useState, ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';

interface IStudent {
    nome: string;
    sobrenome: string;
}

const Tasks: React.FC = () => {
    const [model, setModel] = useState<IStudent>({
        nome: '',
        sobrenome: '',
    });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.nome]: e.target.value,
        });
    }
    function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(model);
    }
    return (
        <div className='container'>
            <br />
            <div className='task-header'>
                <h1>Nova Tarefa</h1>
                <Button variant='dark' size='sm'>
                    Voltar
                </Button>
            </div>
            <br />
            <div className='container'>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control type='text' name='title' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as='textarea' rows={3} name='description' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>
                    <Button variant='dark' type='submit'>
                        Salvar
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default Tasks;
