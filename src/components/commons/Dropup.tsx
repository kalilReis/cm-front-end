import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
      <button className="dropbtn">{picked.label}</button>
      <div className="dropup-content">
        {options.map(option => {
          return (
            <a
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
  border: 1px solid black;

  .dropbtn {
    width: 200px;
    padding: 16px;
    font-size: 16px;
    border: none;
    background: white;
  }

  /* Dropup content (Hidden by Default) */
  .dropup-content {
    display: none;
    position: absolute;
    bottom: 50px;
    background-color: white;
    min-width: 200px;
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
