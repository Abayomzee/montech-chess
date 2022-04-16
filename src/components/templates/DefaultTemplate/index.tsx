import React from "react";
import NavBar from "components/organisms/NavBar";
import Head from "./../../atoms/meta/head";

interface Props {
  children?: any;
  className?: string;
  title?: string;
}
const DefaultTemplate: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <>
      <Head title={title} />
      <main className="layout default-layout">
        <NavBar />
        {children}
      </main>
    </>
  );
};

export default DefaultTemplate;
