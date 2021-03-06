import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const UserIcon: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "43"}
      height={height || "43"}
      className={className ? className : ""}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="43" height="43" fill="#383531" />
      <path
        d="M22 31C13.12 31 10 35.5 10 38.5V43H34V38.5C34 35.5 30.88 31 22 31Z"
        fill="#BDBDBD"
      />
      <path
        d="M22 29.5C25.7279 29.5 28.75 26.4779 28.75 22.75C28.75 19.0221 25.7279 16 22 16C18.2721 16 15.25 19.0221 15.25 22.75C15.25 26.4779 18.2721 29.5 22 29.5Z"
        fill="#BDBDBD"
      />
    </svg>
  );
};

export default UserIcon;
