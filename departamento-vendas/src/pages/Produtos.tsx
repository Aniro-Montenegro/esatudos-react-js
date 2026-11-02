import { produtosLista } from '../produtos/produtos';
import CardProduto from '../componets/CardProduto';
import '/src/style/produtos-grid.css';

export default function Produtos() {
    return (
        <section className="produtos-section" style={{ padding: '40px' }}>
            <h2 style={{ textAlign: 'center', color: '#0E2656', marginBottom: '32px', fontFamily: 'Roboto, sans-serif' }}>
                Nossos Produtos
            </h2>
            <div className="produtos-grid">
                {produtosLista.map((produto) => (
                    <CardProduto
                        key={produto.id}
                        imagem={produto.imagem}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                    />
                ))}
            </div>
        </section>
    );
}