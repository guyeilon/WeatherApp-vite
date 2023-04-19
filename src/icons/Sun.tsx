import { SVGProps } from 'react';

const SvgSun = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#sun_svg__a)" stroke="#444E72" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 23.45a8.45 8.45 0 1 0 0-16.9 8.45 8.45 0 0 0 0 16.9z" strokeWidth={1.5} />
      <path
        d="m26.282 24.282-.169-.169m0-18.226.169-.169-.169.169zM7.718 24.282l.169-.169-.169.169zM17 2.104V2v.104zM17 28v-.104V28zM4.104 15H4h.104zM30 15h-.104H30zM7.887 5.887l-.169-.169.169.169z"
        strokeWidth={2}
      />
    </g>
    <defs>
      <filter
        id="sun_svg__a"
        x={0}
        y={1}
        width={31}
        height={32}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx={-2} dy={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5875_22952" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_5875_22952" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgSun;
