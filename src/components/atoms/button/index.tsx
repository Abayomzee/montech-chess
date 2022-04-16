import React from "react";

interface Props {
  children?: any;
  className?: string;
  disabled?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
