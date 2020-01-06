import React, { useState, useEffect } from "react";
import styled from "styled-components";
import upArrow from "../../icons/up-arrow.svg";
interface DropupOption {
  id: number;
  label: string;
}
interface DropupProps {
  options: DropupOption[];
  onChange: (option: DropupOption) => void;
}

export const Dropup: React.FC<DropupProps> = ({ onChange, options }) => {
  const [picked, setPicked] = useState<DropupOption>(options[0]);

  useEffect(() => {
    onChange(picked);
  }, [picked]);

  return (
    <StyledDropup>
      <button className="dropbtn">
        <span>{picked.label}</span>
        <img src={upArrow} width={"12px"} height={"12px"} />
      </button>
      <div className="dropup-content">
        {options.map(option => {
          return (
            <a
              style={picked.id == option.id ? { display: "none" } : {}}
              id={String(option.id)}
              onClick={() => {
                setPicked(option);
              }}
            >
              {option.label}
            </a>
          );
        })}
      </div>
    </StyledDropup>
  );
};

const StyledDropup = styled.div`
  position: relative;
  display: inline-block;

  .dropbtn {
    width: 230px;
    padding: 8px 1rem;
    font-size: 1rem;
    border: none;
    background: white;
    border: 1px solid black;
    border-radius: 4px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      margin-top: 3px;
    }
  }

  /* Dropup content (Hidden by Default) */
  .dropup-content {
    display: none;
    position: absolute;
    bottom: 35px;
    background-color: white;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropup */
  .dropup-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropup links on hover */
  .dropup-content a:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  /* Show the dropup menu on hover */
  &:hover .dropup-content {
    display: block;
  }

  /* Change the background color of the dropup button when the dropup content is shown */
  &:hover .dropbtn {
    background-color: #444f53;
  }
`;

export default Dropup;
