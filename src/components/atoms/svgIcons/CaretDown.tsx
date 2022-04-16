import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const CaretDown: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "12"}
      height={height || "8"}
      className={className ? className : ""}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 1.66669L6.00004 6.33335L1.33337 1.66669"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CaretDown;
