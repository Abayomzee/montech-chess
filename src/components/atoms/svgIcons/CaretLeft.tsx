import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const CaretLeft: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "8"}
      height={height || "13"}
      className={className ? className : ""}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.88049 1.2216C7.03598 1.37713 7.12333 1.58806 7.12333 1.80798C7.12333 2.02791 7.03598 2.23883 6.88049 2.39437L2.77495 6.49991L6.88049 10.6054C7.03157 10.7619 7.11517 10.9714 7.11328 11.1888C7.11139 11.4063 7.02417 11.6143 6.87039 11.7681C6.71661 11.9219 6.50859 12.0091 6.29112 12.011C6.07365 12.0129 5.86414 11.9293 5.70772 11.7782L1.01579 7.08629C0.860298 6.93076 0.772949 6.71983 0.772949 6.49991C0.772949 6.27998 0.860298 6.06905 1.01579 5.91352L5.70772 1.2216C5.86325 1.06611 6.07418 0.97876 6.2941 0.97876C6.51403 0.97876 6.72496 1.06611 6.88049 1.2216Z"
        fill="white"
      />
    </svg>
  );
};

export default CaretLeft;
