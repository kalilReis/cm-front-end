import React, { useState, useEffect } from "react";
import logoIcon from "../../icons/logo.svg";
import styled from "styled-components";
import SearchBar from "../commons/SearchBar";

interface HeaderProps {
  totalProducts: number;
  handleSearchValue: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalProducts,
  handleSearchValue
}) => {
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState();

  useEffect(() => {
    clearTimeout(timer);
    var timeout = setTimeout(function() {
      handleSearchValue(search);
    }, 1000);
    setTimer(timeout);
  }, [search]);

  return (
    <StyledHeader>
      <div className="top-header">
        <div className="top-header-content">
          <img src={logoIcon} width={"150px"} height={"100%"} />
        </div>
        <SearchBar
          delay={50}
          placeholder="Buscar Produtos"
          handleSearchValue={value => setSearch(value)}
        />
      </div>
      <div className="search-display-container">
        <div>
          <p>{search ? search : "Lista de produtos"}</p>
          <h4>{totalProducts} PRODUTOS ENCONTRADOS</h4>
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
