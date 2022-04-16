import React from "react";
import Button from "components/atoms/button";
import CaretDown from "components/atoms/svgIcons/CaretDown";

interface Props {
  label?: string;
  value?: any;
  type?: string;
  selectedcoin?: string;
  name?: any;
  onChange: (val: any)=> void;
}
const Input: React.FC<Props> = (props) => {
  const { label, selectedcoin, type = "text" } = props;
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div className="input-holder">
        <input
          type={type}
          className="input-ele"
          {...props}
        />
        <Button className="custom-select">
          {selectedcoin}
          <CaretDown />
        </Button>
      </div>
    </div>
  );
};

export default Input;
