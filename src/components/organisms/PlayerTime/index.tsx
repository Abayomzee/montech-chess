import React from "react";
import Timer from "components/atoms/timer";
import Player from "components/molecules/Player";

interface Props {
  name?: string;
}
const PlayerTime: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <div className="flex items-center justify-between gap-3">
      <Player name={name} />
      <Timer />
    </div>
  );
};

export default PlayerTime;
