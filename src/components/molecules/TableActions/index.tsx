import React from "react";
import Button from "components/atoms/button";
import { useRouter } from "next/router";

interface Props {
  disableRequest?: boolean;
}
const TableActions: React.FC<Props> = (props) => {
  const { disableRequest } = props;
  const router = useRouter();
  return (
    <div className="flex items-center gap-3">
      <Button
        disabled={disableRequest}
        onClick={() => router.push("/games/playing-as/user")}
        className="btn-1 btn-sm"
      >
        Request to join
      </Button>
      <Button
      disabled={disableRequest}
        onClick={() => router.push("/games/playing-as/spectator")}
        className="btn-3 btn-sm"
      >
        Spectate
      </Button>
    </div>
  );
};

export default TableActions;
