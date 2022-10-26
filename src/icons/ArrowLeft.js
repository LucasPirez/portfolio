import * as React from "react";

const ArrowLeft = (props) => (
  <svg height={35} width={35} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      stroke="#eee"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="scale(1.8)"
      filter={"drop-shadow(1px 1px 1px rgb(0,0,0 )"}
    >
      <path d="M7.499 6.497 3.5 10.499l4 4.001M16.5 10.5h-13" />
    </g>
  </svg>
);

export default ArrowLeft;
