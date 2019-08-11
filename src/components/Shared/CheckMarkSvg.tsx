import * as React from 'react';

const CheckMarkSvg: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2 flex-shrink-0" {...props}>
    <circle cx={12} cy={12} r={10} fill="#c6f6d5" />
    <path
      d="M10 14.59l6.3-6.3a1 1 0 011.4 1.42l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.42l2.3 2.3z"
      fill="#38a169"
    />
  </svg>
);

export default CheckMarkSvg;
