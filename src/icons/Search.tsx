import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#search_svg__a)" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.417 25.5c6.12 0 11.083-4.962 11.083-11.083S21.538 3.333 15.417 3.333c-6.122 0-11.084 4.963-11.084 11.084 0 6.121 4.962 11.083 11.084 11.083zm12.25 1.167-2.334-2.334" />
    </g>
    <defs>
      <filter
        id="search_svg__a"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5875_22337" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_5875_22337" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgSearch;
