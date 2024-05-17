import * as React from "react";

const ArrowRight = (props) => (
  <svg height={35} width={35} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      stroke="#eee"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      transform="scale(1.8)"
      filter={"drop-shadow(1px 1px 1px rgb(0,0,0)"}
    >
      <path d="m13.5 6.497 4 4.002-4 4.001M4.5 10.5h13" />
    </g>
  </svg>
);

export default ArrowRight;
