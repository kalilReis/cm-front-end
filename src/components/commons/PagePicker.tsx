import React, { useState, useEffect } from "react"
import styled from "styled-components"

interface PagePickerProps {
  totalPages: number
  returnPickedPage: (page: number) => void
}
const LIMIT = 5

const arr = (num: number) =>
  Array.from(Array(num).keys())
    .slice(num - LIMIT, num)
    .map(n => n + 1)

const PagePicker: React.FC<PagePickerProps> = ({
  totalPages,
  returnPickedPage
}) => {
  const [pagePicked, setPagePicked] = useState(1)
  const [showedPages, setShowedPages] = useState()
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [prevBtnsDisabled, setPrevBtnsDisabled] = useState(true)

  useEffect(() => {
    setShowedPages(totalPages < LIMIT ? totalPages : LIMIT)
  }, [totalPages])

  useEffect(() => {
    returnPickedPage(pagePicked)

    const MIDDLE = showedPages - 2
    const IS_NEXT = pagePicked > MIDDLE
    const IS_PREV = pagePicked < MIDDLE
    const IS_LAST_PAGE = pagePicked === totalPages
    const IS_FIRST_PAGE = pagePicked === 1

    if (IS_LAST_PAGE) {
      setShowedPages(totalPages)
    } else if (IS_NEXT && showedPages < totalPages) {
      const IS_BEFORE_LAST = showedPages + 1 === totalPages
      if (pagePicked === showedPages && !IS_BEFORE_LAST) {
        setShowedPages(showedPages + 2)
      } else {
        setShowedPages(showedPages + 1)
      }
    } else if (IS_PREV && pagePicked >= 3) {
      if (pagePicked == MIDDLE - 1 && pagePicked !== 2) {
        setShowedPages(showedPages - 1)
      } else if (pagePicked == MIDDLE - 1 && pagePicked !== 1) {
        setShowedPages(showedPages - 2)
      }
    } else if (IS_FIRST_PAGE) {
      setShowedPages(LIMIT)
    }

    setNextBtnDisabled(pagePicked === totalPages)
    setPrevBtnsDisabled(pagePicked === 1)
  }, [pagePicked])

  return (
    <StyledPagePicker>
      <button
        disabled={prevBtnsDisabled}
        onClick={() => {
          setPagePicked(1)
        }}
        key={"a"}
      >{`|<`}</button>
      <button
        disabled={prevBtnsDisabled}
        key={"b"}
        onClick={() => {
          setPagePicked(pagePicked - 1)
        }}
      >{`<`}</button>
      {arr(showedPages).map(pageNum => (
        <button
          key={pageNum}
          className={pagePicked === pageNum ? "selected" : ""}
          onClick={() => setPagePicked(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button
        disabled={nextBtnDisabled}
        key={"c"}
        onClick={() => {
          setPagePicked(pagePicked + 1)
        }}
      >{`>`}</button>
      <button
        disabled={nextBtnDisabled}
        onClick={() => {
          setPagePicked(totalPages)
        }}
        key={"d"}
      >{`>|`}</button>
      <label>
        picked={pagePicked} total={totalPages} showed= [
        {showedPages - LIMIT + 1}..
        {showedPages}] showedPages={showedPages}
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
