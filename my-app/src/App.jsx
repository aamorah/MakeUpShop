import CardProduto from "./CardProduto";
import styled from "@emotion/styled";

export default function App() {
  const produtos = [
    {
      nome: "Batom Matte Rosé",
      descricao: "Um batom de longa duração com acabamento matte aveludado.",
      preco: 39.9,
    },
    {
      nome: "Paleta de Sombras Lavanda",
      descricao:
        "Uma paleta com tons de lavanda que combinam perfeitamente com a estação.",
      preco: 69.9,
    },
    {
      nome: "Delineador Líquido Preto",
      descricao: "Delineador de alta precisão para um olhar marcante.",
      preco: 29.9,
    },
    {
      nome: "Base Liquida FPS 50",
      descricao:
        "Base com proteção solar para uma pele saudável, disponível em várias tonalidades.",
      preco: 89.9,
    },
  ];

  const Pagina = styled.div`
    background-color: #fcecff;
    min-height: 100vh;
  `;

  const Cabecalho = styled.header`
    text-align: center;
    margin-bottom: 30px;
  `;

  const Titulo = styled.h1`
    font-size: 2.5rem;
    color: #f988c4;
  `;

  const Subtitulo = styled.p`
    font-size: 1.1rem;
    color: #7a627d;
  `;

  const Catalogo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
  `;

  return (
    <Pagina>
      <Cabecalho>
        <Titulo>MakeUp Shop</Titulo>
        <Subtitulo>Beleza, estilo e autoestima para todas!</Subtitulo>
      </Cabecalho>
      <Catalogo>
        {produtos.map((produto) => (
          <CardProduto key={produto.nome} produto={produto} />
        ))}
      </Catalogo>
    </Pagina>
  );
}
