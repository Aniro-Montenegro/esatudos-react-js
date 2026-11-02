// src/produtos/produtos.ts

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    imagem: string;
}

export const produtosLista: Produto[] = [
    {
        id: 1,
        nome: "Smartphone Gamer X",
        descricao: "Tela AMOLED de 120Hz, 256GB de armazenamento e 12GB de RAM.",
        preco: "R$ 2.499,00",
        imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        nome: "Notebook Ultra Slim",
        descricao: "Processador de última geração, 16GB RAM e SSD de 512GB.",
        preco: "R$ 4.899,00",
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        nome: "Fone de Ouvido Bluetooth",
        descricao: "Cancelamento ativo de ruído e bateria com duração de até 30 horas.",
        preco: "R$ 599,00",
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        nome: "Smartwatch Pro",
        descricao: "Monitoramento cardíaco completo, GPS integrado e à prova d'água.",
        preco: "R$ 899,00",
        imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        nome: "Câmera Mirrorless 4K",
        descricao: "Sensor de alta resolução ideal para criadores de conteúdo e fotógrafos.",
        preco: "R$ 6.299,00",
        imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        nome: "Console de Videogame Next-Gen",
        descricao: "Gráficos em 4K, ray tracing e alta taxa de quadros por segundo.",
        preco: "R$ 4.299,00",
        imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 7,
        nome: "Monitor Ultrawide 34\"",
        descricao: "Resolução WQHD, taxa de atualização de 144Hz para trabalho e jogos.",
        preco: "R$ 2.199,00",
        imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 8,
        nome: "Teclado Mecânico RGB",
        descricao: "Switches mecânicos de alta precisão e iluminação personalizável.",
        preco: "R$ 450,00",
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 9,
        nome: "Mouse Ergonômico Wireless",
        descricao: "Design confortável para longas horas de uso e sensor de alta precisão.",
        preco: "R$ 280,00",
        imagem: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&auto=format&fit=crop&q=80"
    },
    {
        id: 10,
        nome: "Caixa de Som Bluetooth à Prova d'Água",
        descricao: "Som estéreo potente de 360 graus com graves profundos.",
        preco: "R$ 399,00",
        imagem: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop&q=80"
    }
];