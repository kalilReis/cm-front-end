import React, { useRef } from "react";
import ProductList from "../product/ProductList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import RendCount from "../commons/RendCounter";

const Main: React.FC = () => {
  const { products } = useSelector((state: ApplicationState) => state);
  const { docs } = products.data;

  return (
    <StyledMain>
      <RendCount label={"main"} />
      <ProductList products={docs} />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px;
`;

export default Main;
