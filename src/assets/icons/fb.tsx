import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="30"
    viewBox="0 0 21 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.9141 16.8538L19.9098 11.6567H13.6857V8.28404C13.6857 6.86248 14.5549 5.47591 17.3427 5.47591H20.1719V1.05147C20.1719 1.05147 17.6048 0.700562 15.1496 0.700562C10.0243 0.700562 6.67424 3.1901 6.67424 7.69621V11.6576H0.976562V16.8547H6.67424V29.4191H13.6857V16.8547L18.9141 16.8538Z"
      fill="url(#paint0_linear_1_15605)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_15605"
        x1="10.5742"
        y1="0.700562"
        x2="10.5742"
        y2="29.4191"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E89B93" />
        <stop offset="1" stop-color="#E89B93" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
