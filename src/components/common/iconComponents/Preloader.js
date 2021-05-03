import * as React from "react";

function SvgPreloader(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="1em"
      height="1em"
      {...props}
    >
      <circle fill="currentColor" cx={6} cy={50} r={6}>
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 15 ; 0 -15; 0 15"
          repeatCount="indefinite"
          begin={0.1}
        />
      </circle>
      <circle fill="currentColor" cx={30} cy={50} r={6}>
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 10 ; 0 -10; 0 10"
          repeatCount="indefinite"
          begin={0.2}
        />
      </circle>
      <circle fill="currentColor" cx={54} cy={50} r={6}>
        <animateTransform
          attributeName="transform"
          dur="1s"
          type="translate"
          values="0 5 ; 0 -5; 0 5"
          repeatCount="indefinite"
          begin={0.3}
        />
      </circle>
    </svg>
  );
}

const MemoSvgPreloader = React.memo(SvgPreloader);
export default MemoSvgPreloader;
