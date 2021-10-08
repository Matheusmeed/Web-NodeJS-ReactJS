import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Students from './pages/Students';
import cadastrarAluno from './pages/Students/Form';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/alunos' exact component={Students} />
            <Route path='/alunos_cadastro' exact component={cadastrarAluno} />
        </Switch>
    );
};

export default Routes;
