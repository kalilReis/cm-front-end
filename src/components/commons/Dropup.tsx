import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Dropup() {
  const [picked, setPicked] = useState(16);

  const options = [4, 8, 16, 32];

  useEffect(() => {}, [picked]);

  return (
    <StyledDropup>
      <div className="dropup">
        <button className="dropbtn">{picked} produtos por página</button>
        <div className="dropup-content">
          {options.map(num => {
            return (
              <a
                onClick={() => {
                  setPicked(num);
                }}
              >
                {num} produtos por página
              </a>
            );
          })}
        </div>
      </div>
    </StyledDropup>
  );
}

const StyledDropup = styled.div`
  .dropbtn {
    width: 200px;
    padding: 16px;
    font-size: 16px;
    border: none;
    background: white;
  }

  /* The container <div> - needed to position the dropup content */
  .dropup {
    position: relative;
    display: inline-block;
    border: 1px solid black;
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
  .dropup:hover .dropup-content {
    display: block;
  }

  /* Change the background color of the dropup button when the dropup content is shown */
  .dropup:hover .dropbtn {
    background-color: #444f53;
  }
`;
