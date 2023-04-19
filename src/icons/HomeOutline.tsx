import { SVGProps } from 'react';

const SvgHomeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#homeOutline_svg__a)" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.275 3.55 6.537 8.8C5.412 9.675 4.5 11.538 4.5 12.95v9.263c0 2.9 2.362 5.275 5.262 5.275h14.476c2.9 0 5.262-2.375 5.262-5.263v-9.1c0-1.512-1.012-3.45-2.25-4.312L19.525 3.4c-1.75-1.225-4.562-1.162-6.25.15zM17 22.487v-3.75" />
    </g>
    <defs>
      <filter
        id="homeOutline_svg__a"
        x={-1}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5793_13930" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_5793_13930" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgHomeOutline;
