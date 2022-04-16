import React from "react";
import Typography from "components/atoms/Typography";

interface Props {}
const Timer: React.FC<Props> = (props) => {
  return (
    <div className="timer">
      <Typography as="span" className="timer-text" text="00:00:00" />
    </div>
  );
};

export default Timer;
