import React, { useEffect } from "react";
import ProductList from "../product/ProductList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import CounterRenders from "../commons/CounterRenders";
import { loadAction } from "../../store/ducks/products/actions";

const Main: React.FC = () => {
  const { products } = useSelector((state: ApplicationState) => state);
  const { docs, search, limit, page } = products.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAction(search, page, limit));
  }, [limit, page, search, dispatch]);

  return (
    <StyledMain>
      <CounterRenders label={"main"} />
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
