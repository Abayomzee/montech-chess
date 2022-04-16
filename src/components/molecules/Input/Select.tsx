import React from "react";

interface Props {
  label?: string;
  value?: any;
  options?: any;
  name?: any;
  onChange: (val: any) => void;
}
const Select: React.FC<Props> = (props) => {
  const { label, options,onChange } = props;
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div className="input-holder">
        <select className="input-ele" onChange={onChange}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
