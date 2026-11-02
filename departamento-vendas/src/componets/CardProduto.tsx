import '/src/style/cardproduto-style.css';

// Definindo o formato (interface) das propriedades que o card vai receber
interface ProdutoProps {
    imagem: string;
    nome: string;
    descricao: string;
    preco: string;
}

export default function CardProduto({ imagem, nome, descricao, preco }: ProdutoProps) {
    return (
        <div className="produto-card">
            {/* Imagem do produto */}
            <div className="produto-imagem-container">
                <img src={imagem} alt={nome} className="produto-imagem" />
            </div>

            {/* Informações abaixo da imagem */}
            <div className="produto-conteudo">
                <div>
                    <h3 className="produto-nome">{nome}</h3>
                    <p className="produto-descricao">{descricao}</p>
                </div>
                <span className="produto-preco">{preco}</span>
            </div>
        </div>
    );
}