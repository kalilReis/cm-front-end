import React, { useState, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../../icons/search.svg";
import removeIcon from "../../icons/remove.svg";

interface SearchBarProps {
  delay: number;
  placeholder: string;
  handleSearchValue: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  delay,
  placeholder,
  handleSearchValue
}) => {
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState();

  useEffect(() => {
    clearTimeout(timer);
    var timeout = setTimeout(function() {
      handleSearchValue(search);
    }, delay);
    setTimer(timeout);
  }, [search]);

  return (
    <StyledSearchBar className="top-header-content">
      <div className="search-icon default-border">
        <img src={searchIcon} />
      </div>
      <input
        className="default-border"
        value={search}
        placeholder={placeholder}
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
  );
};

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

export default SearchBar;
