import React, { useState, useEffect } from "react";
import PagePicker from "../commons/PagePicker";
import styled from "styled-components";
import Dropup from "../commons/Dropup";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import {
  setPageLimitAction,
  setPageAction
} from "../../store/ducks/products/actions";
import CounterRenders from "../commons/CounterRenders";
import { Theme } from "../../Theme";

const Footer: React.FC = () => {
  const { products } = useSelector((state: ApplicationState) => state);
  const dispatch = useDispatch();

  const { limit, totalDocs, page } = products.data;
  const [activePage, setActivePage] = useState(page);
  const [pageLimit, setPageLimit] = useState(limit);

  useEffect(() => {
    if (pageLimit !== limit) dispatch(setPageLimitAction(pageLimit));
  }, [pageLimit, dispatch, limit]);

  useEffect(() => {
    dispatch(setPageAction(activePage));
  }, [activePage, dispatch]);

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  return (
    <StyledFooter>
      <CounterRenders label={"footer"} />
      <div className="item-2">
        <Dropup
          options={[
            { id: 4, label: "4 produtos por página" },
            { id: 8, label: "8 produtos por página" },
            { id: 16, label: "16 produtos por página" },
            { id: 32, label: "32 produtos por página" }
          ]}
          onChange={option => setPageLimit(option.id)}
        />
      </div>
      <div className="item-3">
        <PagePicker
          activePage={activePage}
          itemsCountPerPage={pageLimit}
          totalItemsCount={totalDocs}
          pageRangeDisplayed={5}
          onChange={page => setActivePage(page)}
        />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer<Theme>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  z-index: 99;
  background: #fff;
  padding: 0.5rem;

  border-top: ${props => props.theme.defaultBorder};

  display: grid;
  grid-template-columns: 4% 48% 48%;
  grid-template-areas: "item-1 item-2 item-3";

  .item-1 {
    grid-area: item-1;
    justify-self: center;
  }

  .item-2 {
    grid-area: item-2;
    justify-self: center;
  }

  .item-3 {
    grid-area: item-3;
    justify-self: center;
  }
`;

export default Footer;
