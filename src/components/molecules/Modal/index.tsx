import React from "react";
import Overlay from "components/atoms/Overlay";
import Typography from "components/atoms/Typography";

interface Props {
    children: JSX.Element;
    title?: string;
}
const Modal: React.FC<Props> = (props) => {
    const {children, title}= props;
  return (
    <Overlay>
      <div className="modal-card">
        <Typography as="h4" className="head-2 mb-8" text={title} />
        {children}       
      </div>
    </Overlay>
  );
};

export default Modal;
