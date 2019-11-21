import React from 'react';

interface LoaderInterface {
  width?: number;
  height?: number;
}

const SvgOval = (props: LoaderInterface) => (
  <svg stroke="#429DE3" {...props}>
    <g transform="translate(1 1)" strokeWidth={2} fill="none" fillRule="evenodd">
      <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

const Loader = (props: LoaderInterface) => {
  const { width = 48, height = 48 } = props;
  return <SvgOval width={width} height={height} />;
};

export default Loader;
