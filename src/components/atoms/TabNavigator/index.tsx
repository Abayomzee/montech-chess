import React from "react";
import Button from "components/atoms/button";

interface Props {
    active?: boolean;
    label: string;
    handleSelect: ()=>void
}
const TabNavigator: React.FC<Props> = (props) => {
    const {active,label,handleSelect} = props;
  return (
    <Button
      onClick={handleSelect}
      className={`tab-navigator ${active ? "active" : ""} `}
    >
      {label}
    </Button>
  );
};

export default TabNavigator;
