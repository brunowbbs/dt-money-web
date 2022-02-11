import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  //Definir a quantidade de colunas o tamanho delas
  grid-template-columns: repeat(3, 1fr); //ou 1fr 1fr 1fr

  //Definir o espaçamento entre colunas
  gap: 2rem;

  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }
`;
