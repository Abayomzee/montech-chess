import React from "react";
import UserIcon from "components/atoms/svgIcons/UserIcon";
import Typography from "components/atoms/Typography";

interface Props {
  name?: string;
}
const Player: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <div className="flex items-center gap-3">
      <UserIcon />
      <Typography as="span" className="player-name" text={name} />
    </div>
  );
};

export default Player;
