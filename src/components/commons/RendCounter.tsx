import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";

interface RenderCounter {
  label: string;
}
const RendCounter: React.FC<RenderCounter> = ({ label }) => {
  const { products } = useSelector((state: ApplicationState) => state);
  const renders = useRef(0);
  return (
    <div
      style={products.debug ? { display: "inline-block" } : { display: "none" }}
    >{`${label}=${renders.current++}`}</div>
  );
};

export default RendCounter;
