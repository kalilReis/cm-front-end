import React, { useState, useEffect } from "react"
import styled from "styled-components"

interface PagePickerProps {
  totalPages: number
  handlePickedPage: (page: number) => void
}

const arr = (num: number) =>
  Array.from(Array(num).keys())
    .slice(num - 5, num)
    .map(n => n + 1)

const PagePicker: React.FC<PagePickerProps> = ({
  totalPages,
  handlePickedPage
}) => {
  const LIMIT = 5
  const [pagePicked, setPagePicked] = useState(1)
  const [numPages, setNumPages] = useState()

  useEffect(() => {
    setNumPages(totalPages < LIMIT ? totalPages : LIMIT)
  }, [totalPages])

  function handleClick(page: number) {
    handlePickedPage(page)
    setPagePicked(page)
  }

  function nextPage(lastPage: number) {
    const next = pagePicked + 1

    if (next + 1 === lastPage && lastPage < totalPages) {
      setNumPages(numPages + 1)
    }
    setPagePicked(next)
    handlePickedPage(next)
  }

  function prevPage(limitPrevPage: number) {
    console.log("limitPrevPage=" + limitPrevPage)
    const prev = pagePicked - 1

    if (prev - 2 === limitPrevPage) {
      setNumPages(numPages - 1)
    }

    setPagePicked(prev)
    handlePickedPage(prev)
  }

  return (
    <StyledPagePicker>
      <button key={"a"}>{`|<`} </button>
      <button
        key={"b"}
        onClick={() => {
          prevPage(numPages - LIMIT)
        }}
      >{`<`}</button>
      {arr(numPages).map(p => (
        <button
          key={p}
          className={pagePicked === p ? "selected" : ""}
          onClick={() => handleClick(p)}
        >
          {p}
        </button>
      ))}
      <button
        key={"c"}
        onClick={() => {
          nextPage(numPages)
        }}
      >{`>`}</button>
      <button key={"d"}>{`>|`}</button>
      <label>
        {numPages}/{totalPages}
      </label>
    </StyledPagePicker>
  )
}

const StyledPagePicker = styled.div`
  button {
    background: #fff;
    border: none;
    width: 30px;
    height: 30px;
  }
  .selected {
    border: 1px solid black;
    border-radius: 2px;
  }
`

export default PagePicker
