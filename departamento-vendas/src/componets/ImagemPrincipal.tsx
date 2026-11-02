import '/src/style/imagem-style.css';
import imagemDepartamento from '../assets/departamento.png'; // Forma correta de importar imagens no Vite

export default function ImagemPrincipal() {
    return (
        <div className="imagem-wrapper">
            <img
                src={imagemDepartamento}
                alt="Departamento de Eletrônicos"
                className="imagem-destaque"
            />
        </div>
    );
}