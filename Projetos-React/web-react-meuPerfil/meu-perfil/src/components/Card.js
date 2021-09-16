import projeto1 from '../img/professorMMS.gif';
import img from '../img/p.jpg';
import projeto2 from '../img/admMativi.gif';

function Card() {
    return (
        <div>
            <img id='matheus' alt='Matheus' src={img} />
            <div>
                <h2>Dados Pessoais</h2>
                <p>Matheus Medeiros da Silva</p>
                <p>19 anos</p>
            </div>
            <div>
                <h2>Formação</h2>
                <p>Ensino Superior (Ciência da Computação) - Cursando</p>
            </div>
            <div>
                <h2>Experiência</h2>
                <p>Sem experiência profissinal</p>
            </div>
            <div>
                <h2 id='project'>Projetos</h2>
                <div>
                    <img alt='escola' src={projeto1} />
                    <a href='https://github.com/Matheusmeed/EscolaMMS' target='blank'>
                        EscolaMMS
                    </a>
                </div>
                <div>
                    <img alt='mativi' src={projeto2} />
                    <a href='https://github.com/Matheusmeed/Gerenciador-de-Tarefas' target='blank'>
                        Mativi - Gerenciador de Tarefas
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
