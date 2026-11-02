import { useNavigate } from 'react-router-dom';
import '/src/style/botao_entrar.css';

export default function BotaoEntrar() {
    const navigate = useNavigate();

    const irParaProdutos = () => {
        navigate('/produtos'); // Redireciona para a rota de produtos
    };

    return (
        <button className="botao-entrar" onClick={irParaProdutos}>
            Entrar
        </button>
    );
}