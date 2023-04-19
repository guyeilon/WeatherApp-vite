import { SVGProps } from 'react';

const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#moon_svg__a)">
      <path
        d="M4.2 15.455c.39 5.579 5.124 10.118 10.79 10.367 3.997.174 7.572-1.69 9.717-4.626.888-1.202.412-2.004-1.073-1.733-.726.13-1.473.184-2.253.152-5.297-.217-9.63-4.648-9.652-9.88a9.638 9.638 0 0 1 .812-3.954c.585-1.344-.12-1.983-1.473-1.409-4.29 1.81-7.226 6.132-6.869 11.083z"
        stroke="#444E72"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="moon_svg__a"
        x={0.42}
        y={3.411}
        width={25.484}
        height={27.172}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx={-2} dy={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5959_22255" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_5959_22255" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgMoon;