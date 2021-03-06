import * as React from 'react';

const TwitterIcon: React.FC<JSX.IntrinsicElements['svg']> = props => (
  <svg
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    aria-label="twitter"
    viewBox="0 0 32 32"
    fill="currentColor"
    width={48}
    height={48}
    {...props}
  >
    <path d="M16 28c11 0 12-1 12-12S27 4 16 4 4 5 4 16s1 12 12 12zm5.825-13.901c0 3.669-2.889 7.901-8.172 7.901a8.333 8.333 0 01-4.403-1.248c.225.026.454.039.685.039a5.89 5.89 0 003.568-1.189c-1.258-.022-2.318-.825-2.684-1.928a2.996 2.996 0 001.298-.048c-1.315-.255-2.305-1.377-2.305-2.722l.001-.036c.387.208.829.333 1.301.348a2.751 2.751 0 01-1.279-2.312c0-.509.143-.985.389-1.396a8.25 8.25 0 005.921 2.902 2.707 2.707 0 01-.074-.633c0-1.533 1.286-2.777 2.872-2.777a2.92 2.92 0 012.097.877 5.867 5.867 0 001.824-.674 2.805 2.805 0 01-1.263 1.536 5.882 5.882 0 001.649-.437 5.726 5.726 0 01-1.433 1.438c.006.119.008.239.008.359z" />
  </svg>
);

export default TwitterIcon;
