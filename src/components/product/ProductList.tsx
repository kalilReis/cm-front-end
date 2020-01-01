import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ApplicationState } from "../../store"
import styled from "styled-components"
import { load } from "../../store/ducks/products/actions"
import { Product } from "../../store/ducks/products/types"

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <StyledListContainer>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            <Image />
            <Image />
            <Image />
            <Image />
            <div>
              <h4>{prod.name}</h4>
              <p>
                {prod.type} * {prod.size}
              </p>
            </div>
            <div>
              R${prod.previousPrice} por R${prod.currentPrice}
            </div>
          </li>
        ))}
      </ul>
    </StyledListContainer>
  )
}

const Image = () => (
  <div>
    <img
      width="100%"
      height="100%"
      src="https://images-shoptime.b2w.io/produtos/01/00/oferta/28543/0/28543065_1GG.jpg"
      alt=""
    />
  </div>
)

const StyledListContainer = styled.div`
  li {
    border: 1px solid black;
    width: 150vh;
    height: 15vh;

    display: grid;
    grid-template-rows: repeat(6, 100%);
    grid-template-columns: 10% 10% 10% 10% 30% 30%;
    justify-content: center;

    div {
      margin: 6px;
    }
  }
`
export default ProductList
