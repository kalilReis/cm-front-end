import React from "react";
import styled from "styled-components";
import { Product } from "../../store/ducks/products/types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <StyledListContainer>
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            <Image />
            <Image />
            <Image />
            <Image />
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

const Image = () => (
  <div>
    <img
      width="100%"
      height="100%"
      src="https://images-shoptime.b2w.io/produtos/01/00/oferta/28543/0/28543065_1GG.jpg"
      alt=""
    />
  </div>
);

const StyledListContainer = styled.div`
  ul {
    border: 1px solid rgb(153, 137, 124);

    li {
      border-bottom: 1px solid rgb(153, 137, 124);
      height: 10%;
      display: grid;
      grid-template-rows: repeat(6, 100%);
      grid-template-columns: 10% 10% 10% 10% 30% 30%;
      grid-template-areas: "img-a img-b img-c img-d description prices";

      .prod-description {
        grid-area: description;
        align-self: center;
        margin-left: 5%;
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

      div {
        margin: 6px;
      }
    }

    li:last-child {
      border-bottom: none;
    }
  }
`;
export default ProductList;
