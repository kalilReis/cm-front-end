import React, { useState, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../../icons/search.svg";
import removeIcon from "../../icons/remove.svg";
import CounterRenders from "./CounterRenders";
import { Theme } from "../../Theme";

interface SearchBarProps {
  placeholder: string;
  handleSearchValue: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  handleSearchValue
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSearchValue(search);
  }, [search, handleSearchValue]);

  return (
    <StyledSearchBar className="top-header-content">
      <CounterRenders label={"search-bar"} />
      <div className="search-icon">
        <img src={searchIcon} alt="search-icon" />
      </div>
      <input
        value={search}
        placeholder={placeholder}
        type="text"
        onChange={e => setSearch(e.target.value)}
      />
      <div className="remove-icon">
        <img
          onClick={() => {
            setSearch("");
          }}
          className={search ? "" : "hide"}
          src={removeIcon}
          alt="remove-icon"
        />
      </div>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div<Theme>`
  display: flex;
  flex-direction: row;
  height: 2rem;

  input {
    border: ${props => props.theme.defaultBorder};
    border-left: none;
    border-right: none;
    width: 300px;
  }

  .search-icon {
    border: ${props => props.theme.defaultBorder};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-right: none;
    width: 3rem;
    display: flex;
    justify-content: center;

    img {
      width: 15px;
    }
  }

  .remove-icon {
    border: ${props => props.theme.defaultBorder};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-left: none;
    width: 3rem;
    display: flex;
    justify-content: center;

    img {
      width: 15px;
    }

    img.hide {
      display: none;
    }
  }
`;

export default SearchBar;
