import React from 'react';

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-6.1-.9-8.5-4.7-8.5-4.7s-1.4 2.4-6.7 2.4c-3 0-6-2.2-6-5.2 0-2.6 2.4-4.3 5.1-4.3 2.5 0 4.1 1.3 4.1 1.3s3.2-1.2 6.3-1.2z" />
    <path d="m3 21 1.7-3.6" />
  </svg>
);

export default TwitterIcon;