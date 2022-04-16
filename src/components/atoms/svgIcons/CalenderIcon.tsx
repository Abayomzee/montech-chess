import React from "react";

interface Props {
  width?: string;
  height?: string;
  className?: string;
}
const CalenderIcon: React.FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || "18"}
      height={height || "20"}
      className={className ? className : ""}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.57715 7.83688H16.4304"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7017 11.0915H12.7094"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00384 11.0915H9.01156"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29828 11.0915H5.306"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7017 14.3302H12.7094"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.00384 14.3302H9.01156"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29828 14.3302H5.306"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3698 1.66669V4.409"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.63795 1.66669V4.409"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5319 2.98267H5.4758C3.02856 2.98267 1.5 4.34594 1.5 6.85185V14.3932C1.5 16.9385 3.02856 18.3333 5.4758 18.3333H12.5242C14.9791 18.3333 16.5 16.9622 16.5 14.4563V6.85185C16.5077 4.34594 14.9868 2.98267 12.5319 2.98267Z"
        stroke="#535353"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalenderIcon;
