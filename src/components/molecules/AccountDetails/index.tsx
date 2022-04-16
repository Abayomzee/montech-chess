import React from "react";
import Typography from "components/atoms/Typography";
import { useWeb3React } from "@web3-react/core";
import { formatAdress } from "utils/helpers";

interface Props {
  children?: any;
  className?: string;
  layout?: "board";
}
const AccountDetails: React.FC<Props> = (props) => {
  // Hooks
  const { account } = useWeb3React();

  // Props
  const { layout } = props;


  return (
    <div className="account-details">
      <div className="account-details__left">
        <Typography as="p" text="0.04 ETH" />
      </div>
      <div className={`account-details__right ${layout ? layout : ""}`}>
        <Typography as="p" text={`${formatAdress(account)}`} />
      </div>
    </div>
  );
};

export default AccountDetails;
