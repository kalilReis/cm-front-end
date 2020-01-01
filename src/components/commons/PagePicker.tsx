import React from "react"

interface PagePickerProps {
  totalPages: number
  setSelectedPage: (page: number) => void
}

const PagePicker: React.FC<PagePickerProps> = ({
  totalPages,
  setSelectedPage
}) => {
  const nums = Array.from(Array(totalPages).keys())
    .slice(0, 6)
    .map(num => ++num)

  return (
    <div>
      <button>{`|<`} </button>
      <button>{`<`}</button>
      {nums.map(num => (
        <button onClick={() => setSelectedPage(num)}>{num}</button>
      ))}
      <button>{`>`}</button>
      <button>{`>|`}</button>
    </div>
  )
}

export default PagePicker
