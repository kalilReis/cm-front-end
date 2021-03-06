import React from "react";
import styled from "styled-components";
import { Product } from "../../store/ducks/products/types";
import CounterRenders from "../commons/CounterRenders";
import { Theme } from "../../Theme";

const imgSrc =
  "https://images-shoptime.b2w.io/produtos/01/00/oferta/28543/0/28543065_1GG.jpg";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <StyledListContainer>
      <CounterRenders label={"prod-list"} />
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            <div className="prod-img">
              <img width="100%" height="100%" src={imgSrc} alt="" />
            </div>
            <div className="prod-img">
              <img  width="100%" height="100%" src={imgSrc} alt="" />
            </div>
            <div className="prod-img">
              <img  width="100%" height="100%" src={imgSrc} alt="" />
            </div>
            <div className="prod-img">
              <img  width="100%" height="100%" src={imgSrc} alt="" />
            </div>
            <div className="prod-description">
              <span className="name">{prod.name}</span>
              <p>
                {prod.type} * {prod.size}
              </p>
            </div>
            <div className="prod-prices">
              <span className="prev-price">R${prod.previousPrice}</span>
              {` por `}
              <span className="current-price">R${prod.currentPrice}</span>
            </div>
          </li>
        ))}
      </ul>
    </StyledListContainer>
  );
};

const StyledListContainer = styled.div<Theme>`
  ul {
    border: ${props => props.theme.defaultBorder};

    li {
      .prod-img {
        width: 100%;
        height: 100%;
        padding: 3% 0;
        padding-left: 3%;
      }

      border-bottom: ${props => props.theme.defaultBorder};
      display: grid;
      grid-template-rows: repeat(6, 100%);
      grid-template-columns: 10% 10% 10% 10% 30% 30%;
      grid-template-areas: "img-a img-b img-c img-d description prices";

     
      .prod-description {
        grid-area: description;
        align-self: center;
        margin-left: 10%;
        .name {
          color: black;
        }
      }

      .prod-prices {
        grid-area: prices;
        align-self: center;
        justify-self: end;
        margin-right: 10%;

        .prev-price {
          text-decoration: line-through;
        }

        .current-price {
          color: black;
        }
      }

      
    }

    li:last-child {
      border-bottom: none;
    }
  }
`;
export default ProductList;
