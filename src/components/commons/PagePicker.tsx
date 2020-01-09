import React from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import CounterRenders from "./CounterRenders";
import lastPage from "../../icons/last-page.svg";
import firstPage from "../../icons/first-page.svg";
import nextPage from "../../icons/next-page.svg";
import prevPage from "../../icons/prev-page.svg";

interface PagePickerProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  onChange: (page: number) => void;
}

const PagePicker: React.FC<PagePickerProps> = props => {
  return (
    <StyledPagePicker>
      <CounterRenders label={"page-picker"} />
      <Pagination
        firstPageText={<img src={firstPage} alt="first-page" />}
        lastPageText={<img src={lastPage} alt="last-page" />}
        prevPageText={<img src={prevPage} alt="prev-page" />}
        nextPageText={<img src={nextPage} alt="next-page" />}
        activePage={props.activePage}
        itemsCountPerPage={props.itemsCountPerPage}
        totalItemsCount={props.totalItemsCount}
        pageRangeDisplayed={props.pageRangeDisplayed}
        onChange={page => props.onChange(page)}
      />
    </StyledPagePicker>
  );
};

const StyledPagePicker = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    li {
      background: #fff;
      padding: 8px 1rem;
      a {
        color: inherit;
        text-decoration: none;
        img {
          width: 22px;
        }
      }
    }

    li:nth-child(1),
    li:nth-last-child(1) {
      padding: 8px 0;
    }

    .active {
      border: 1px solid rgb(153, 137, 124);
      border-radius: 3px;
    }
  }
`;

export default PagePicker;
