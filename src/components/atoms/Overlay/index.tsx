import React from "react";

interface Props {
  children?: JSX.Element;
  initial?: any;
  animate?: any;
  variants?: any;
  transition?: any;
}
const Overlay: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="overlay" {...props}>
      {children}
    </div>
  );
};

export default Overlay;
