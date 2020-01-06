import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "./components/product/ProductList";
import styled from "styled-components";
import { load } from "./store/ducks/products/actions";
import { ApplicationState } from "./store";
import PagePicker from "./components/commons/PagePicker";
import Dropup from "./components/commons/Dropup";
import Header from "./components/layout/Header";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [pageLimit, setPageLimit] = useState(4);
  const { products } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const { totalDocs } = products.data;

  useEffect(() => {
    dispatch(load(search, activePage, pageLimit));
  }, [search, activePage, pageLimit]);

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Header
        totalProducts={totalDocs}
        handleSearchValue={value => setSearch(value)}
      />
      <StyledMain>
        <ProductList products={products.data.docs} />
      </StyledMain>
      <StyledFooter>
        <div>
          <Dropup
            options={[
              { id: 4, label: "4 produtos por página" },
              { id: 8, label: "8 produtos por página" },
              { id: 16, label: "16 produtos por página" }
            ]}
            onChange={option => setPageLimit(option.id)}
          />
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

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 200px;
`;

const StyledFooter = styled.footer`
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

  border-top: 1px solid;
`;

export default App;
