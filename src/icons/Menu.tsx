import { SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#menu_svg__a)" stroke="#fff" strokeWidth={2.5} strokeLinecap="round">
      <path d="M4.592 6h23m-23 9h23m-23 9h23" />
    </g>
    <defs>
      <filter
        id="menu_svg__a"
        x={-2}
        y={0}
        width={33}
        height={34}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx={-2} dy={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5947_13518" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_5947_13518" result="shape" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect2_innerShadow_5947_13518" />
      </filter>
    </defs>
  </svg>
);
export default SvgMenu;
