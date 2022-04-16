import React from "react";
import NavBar from "components/organisms/NavBar";
import Head from "./../../atoms/meta/head";

interface Props {
  children?: any;
  className?: string;
  title?: string;
}
const GameBoardTemplate: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <>
      <Head title={title} />
      <main className="layout game-layout">
        <NavBar layout='board' />
        {children}
      </main>
    </>
  );
};

export default GameBoardTemplate;
