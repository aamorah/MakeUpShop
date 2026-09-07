import styled from "@emotion/styled";
import { useState } from "react";

const CardContainer = styled.div`
  border: 1px solid #ddd;
  min-height: 250px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
`;
const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #c16cfa;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #8e4ca8;
`

const Button = styled.button`
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
  filter: brightness(0.9);
  }
`;

export default function CardProduto({ produto }) {
  const [adicionado, setAdicionado] = useState(false);
  return (
    <CardContainer>
      <ProductName>{produto.nome}</ProductName>
      <p>{produto.descricao}</p>
      <Price>Preço: R$ {produto.preco.toFixed(2)}</Price>
      <Button
        adicionado={adicionado}
        onClick={() => setAdicionado(!adicionado)}
      >
        {adicionado ? "Remover do carrinho" : "Adicionar ao carrinho"}
      </Button>
    </CardContainer>
  );
}
