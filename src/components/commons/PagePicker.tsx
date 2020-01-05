import React from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";

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
      <Pagination
        firstPageText={"|<"}
        lastPageText={">|"}
        prevPageText={"<"}
        nextPageText={">"}
        activePage={props.activePage}
        itemsCountPerPage={props.itemsCountPerPage}
        totalItemsCount={props.totalItemsCount}
        pageRangeDisplayed={7}
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
      border: none;
      padding: 8px 16px;
      a {
        color: #000;
        text-decoration: none;
      }
    }
    .active {
      border: 1px solid black;
      border-radius: 3px;
    }
  }
`;

export default PagePicker;
