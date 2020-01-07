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
      <button className="dropbtn default-border">
        <span>{picked.label}</span>
        <img src={upArrow} width={"12px"} height={"12px"} alt="up-arrow" />
      </button>
      <div className="dropup-content">
        {options.map(option => {
          return (
            <span
              style={picked.id == option.id ? { display: "none" } : {}}
              id={String(option.id)}
              onClick={() => {
                setPicked(option);
              }}
            >
              {option.label}
            </span>
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
    background: white;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      margin-top: 3px;
    }
    span {
      color: gray;
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
  .dropup-content span {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropup links on hover */
  .dropup-content span:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  /* Show the dropup menu on hover */
  &:hover .dropup-content {
    display: block;
  }
`;

export default Dropup;
