import React from "react";

interface Props {
  children?: any;
  className?: string;
}
const Center: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div className={`${className ? className : ""} center-width`}>
      {children}
    </div>
  );
};

export default Center;
