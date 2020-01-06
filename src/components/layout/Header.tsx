import React, { useState, useEffect } from "react";
import logo from "../../icons/logo.svg";
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
        <img src={logo} width={"100px"} height={"50px"} />
        <div>
          <input
            placeholder="search"
            type="text"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
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
