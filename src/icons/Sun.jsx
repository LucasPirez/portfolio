import * as React from 'react';

const Sun = (props) => (
  <svg
    height={21}
    width={21}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="inline-block fill-yellow-500"
  >
    <g
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity={0.3}>
        <path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4 0 2.22 1.781 4 4 4zM4.136 4.136 5.55 5.55M15.45 15.45l1.414 1.414M1.5 10.5h2M17.5 10.5h2M4.136 16.864 5.55 15.45M15.45 5.55l1.414-1.414M10.5 19.5v-2M10.5 3.5v-2" />
      </g>
      <g transform="translate(-210 -1)">
        <path d="M220.5 2.5v2M227 5l-1.5 1.5" stroke="white" />
        <circle cx={220.5} cy={11.5} r={4} />
        <path
          d="m214 5 1.5 1.5M220.5 20.5v-2M227 18l-1.5-1.5M214 18l1.5-1.5M211.5 11.5h2M227.5 11.5h2"
          stroke="white"
        />
      </g>
    </g>
  </svg>
);

export default Sun;
