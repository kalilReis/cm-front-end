import React, { useState, useEffect } from "react";
import logoIcon from "../../icons/logo.svg";
import searchIcon from "../../icons/search.svg";
import removeIcon from "../../icons/remove.svg";
import styled from "styled-components";

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
        <StyledSearchBar className="top-header-content">
          <div className="search-icon default-border">
            <img src={searchIcon} />
          </div>
          <input
            className="default-border"
            value={search}
            placeholder="Buscar Produtos"
            type="text"
            onChange={e => setSearch(e.target.value)}
          />
          <div className="remove-icon default-border">
            <img
              onClick={() => {
                setSearch("");
              }}
              className={search ? "" : "hide"}
              src={removeIcon}
            />
          </div>
        </StyledSearchBar>
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

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;

  input {
    border-left: none;
    border-right: none;
    width: 300px;
  }

  .search-icon {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-right: none;
    width: 3rem;
    display: flex;
    justify-content: center;

    img {
      width: 10px;
    }
  }

  .remove-icon {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-left: none;
    width: 3rem;
    display: flex;
    justify-content: center;

    img {
      width: 12px;
    }

    img.hide {
      display: none;
    }
  }
`;

export default Header;
