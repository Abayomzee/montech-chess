import React from "react";
import Center from "components/atoms/center";
import Logo from "components/atoms/svgIcons/Logo";
import AccountDetails from "components/molecules/AccountDetails";
import Link from "next/link";
import LogoWhite from "components/atoms/svgIcons/LogoWhite";
import { useWeb3React } from "@web3-react/core";

interface Props {
  layout?: "board";
}
const NavBar: React.FC<Props> = (props) => {
    // Hooks
  const { active } = useWeb3React();

// Props
  const { layout } = props;
  return (
    <nav className="navbar__nav">
      <Center
        className={`navbar ${
          active ? "navbar--border" : ""
        } ${layout ? layout : ""}`}
      >
        <Link href={"/"}>
          <a>{layout === "board" ? <LogoWhite /> : <Logo />}</a>
        </Link>
        {active ? <AccountDetails layout={layout} /> : null}
      </Center>
    </nav>
  );
};

export default NavBar;
