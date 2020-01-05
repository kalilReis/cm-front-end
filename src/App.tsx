import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "./components/product/ProductList";
import styled from "styled-components";
import { load } from "./store/ducks/products/actions";
import { ApplicationState } from "./store";
import PagePicker from "./components/commons/PagePicker";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const { products } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const { totalDocs } = products.data;

  useEffect(() => {
    dispatch(load(search, activePage, 10));
  }, [search, activePage]);

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <StyledHeader>
        <div className="inline">
          <h2>mmartan</h2>
          <div>
            <input placeholder="search" type="text" onChange={handleSearch} />
          </div>
        </div>
        <div style={{ background: "hsl(0, 0%, 94%)" }}>
          <h1>{search ? search : "Lista de produtos"}</h1>
        </div>
        <div>
          <h4>{totalDocs} PRODUTOS ENCONTRADOS</h4>
        </div>
      </StyledHeader>
      <StyledMain>
        <ProductList products={products.data.docs} />
      </StyledMain>
      <StyledFooter>
        <div>
          <label>{10 + " produtos por página"}</label>
        </div>
        <PagePicker
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={totalDocs}
          pageRangeDisplayed={7}
          onChange={page => setActivePage(page)}
        />
      </StyledFooter>
    </div>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;

  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  z-index: 99;
  background: #fff;

  .inline {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
  }
`;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10%;
`;

const StyledFooter = styled.footer`
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  z-index: 99;
  background: #fff;
  padding: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default App;
