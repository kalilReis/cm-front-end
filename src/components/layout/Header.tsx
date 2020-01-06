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
      <div className="top-header inline">
        <img src={logoIcon} width={"100px"} height={"50px"} />
        <StyledSearchBar>
          <div className={"search-icon"}>
            <img src={searchIcon} />
          </div>
          <input
            placeholder="search"
            type="text"
            onChange={e => setSearch(e.target.value)}
          />
          <div className={"remove-icon"}>
            <img className={search ? "" : "hide"} src={removeIcon} />
          </div>
        </StyledSearchBar>
      </div>
      <div className={"search-display"}>
        <p>{search ? search : "Lista de produtos"}</p>
      </div>
      <div className={"products-found-display"}>
        <h4>{totalProducts} PRODUTOS ENCONTRADOS</h4>
      </div>
    </StyledHeader>
  );
};

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;

  input {
    border: 1px solid black;
    border-left: none;
    border-right: none;
  }

  .search-icon {
    border: 1px solid black;
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
    border: 1px solid black;
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
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;

  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  border: 1px solid black;
  z-index: 99;
  background: #fff;

  .top-header {
    border-bottom: 1px solid;
    box-shadow: 0 4px 2px -2px gray;
    z-index: 1;
  }

  .inline {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
  }

  .search-display {
    height: 300px;
    background: #eeecef;
    font-size: 50px;
    p {
      margin-left: 2rem;
    }
  }
`;

export default Header;
