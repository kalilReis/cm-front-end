import React, { useState, useEffect, useRef } from "react";
import logoIcon from "../../icons/logo.svg";
import styled from "styled-components";
import SearchBar from "../commons/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import {
  setSearchValueAction,
  setDebugAction
} from "../../store/ducks/products/actions";
import CounterRenders from "../commons/CounterRenders";

export const Header: React.FC = () => {
  const { products } = useSelector((state: ApplicationState) => state);
  const { totalDocs, search } = products.data;
  const { debug } = products;

  const [searchValue, setSearchValue] = useState(search);
  const [isDebug, setDebug] = useState(debug);
  const dispatcher = useDispatch();

  const timeoutRef = useRef(0);

  useEffect(() => {
    if (isDebug !== products.debug) dispatcher(setDebugAction(isDebug));
  }, [isDebug, searchValue, products.debug, dispatcher]);

  useEffect(() => {
    if (timeoutRef.current !== 0) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(function() {
      dispatcher(setSearchValueAction(searchValue));
    }, 500);
  }, [searchValue, dispatcher]);

  return (
    <StyledHeader>
      <div className="top-header">
        <div className="top-header-content">
          <img
            src={logoIcon}
            width={"150px"}
            height={"100%"}
            alt="logo-icon"
            onClick={() => setDebug(!isDebug)}
          />
          <CounterRenders label={"header"} />
        </div>
        <SearchBar
          placeholder="Buscar Produtos"
          handleSearchValue={value => setSearchValue(value)}
        />
      </div>
      <div className="search-display-container">
        <div>
          <p>{search ? search : "Lista de produtos"}</p>
          <h4>{ totalDocs == 1 ? `1 PRODUTO ENCONTRADO` : `${totalDocs} PRODUTOS ENCONTRADOS`}</h4>
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  z-index: 99;
  background: #fff;

  .top-header {
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    box-shadow: 0 4px 2px -2px gray;

    .top-header-content {
      margin: 1rem 2rem;
    }
  }

  .search-display-container {
    height: 300px;
    background: #eeecef;

    div {
      margin: 1rem 2rem;
      p {
        font-size: 50px;
      }
    }
  }

  .products-found-display {
    margin-left: 2rem;
  }
`;

export default Header;
