import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import ProductList from "./components/product/ProductList"
import PagePicker from "./components/commons/PagePicker"
import styled from "styled-components"
import { load } from "./store/ducks/products/actions"
import { ApplicationState } from "./store"

const App: React.FC = () => {
  const [perPageInput, setPerPageInput] = useState(0)
  const [search, setSearch] = useState("")
  const { products } = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()

  const { perPage = 0, totalPages = 0 } = products.data.pagination
  const total = perPage * totalPages

  useEffect(() => {
    setPerPageInput(perPage)
  }, [products])

  useEffect(() => {
    dispatch(load("", 1, 10))
  }, [])

  useEffect(() => {
    dispatch(load(search, 1, 10))
  }, [search])

  function handleSearch(e: any) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <StyledHeader>
        <div className="inline">
          <h2>mmartan</h2>
          <div>
            <input placeholder="search" type="text" onChange={handleSearch} />
          </div>
        </div>
        <div style={{ background: "hsl(0, 0%, 94%)" }}>
          <h1>{search ? search : "Lista de produtos"}</h1>
        </div>
        <div>
          <h4>{total} PRODUTOS ENCONTRADOS</h4>
        </div>
      </StyledHeader>
      <StyledMain>
        <ProductList products={products.data.data} />
      </StyledMain>
      <StyledFooter>
        <div>
          <input type="text" value={perPageInput + " produtos por página"} />
        </div>
        <PagePicker
          totalPages={15}
          setSelectedPage={page => {
            console.log(page)
          }}
        />
      </StyledFooter>
    </div>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;

  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  z-index: 99;
  background: #fff;

  .inline {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
  }
`

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`

const StyledFooter = styled.footer`
  border: 1px solid black;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  z-index: 99;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export default App
