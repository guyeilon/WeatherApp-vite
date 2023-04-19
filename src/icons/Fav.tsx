import { SVGProps } from 'react';

const SvgFav = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#fav_svg__a)" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m23.612 5.175-.087 4.738c-.013.65.4 1.512.925 1.9l3.1 2.35c1.987 1.5 1.662 3.337-.713 4.087L22.8 19.513c-.675.212-1.388.95-1.563 1.637l-.962 3.675c-.763 2.9-2.663 3.188-4.238.638l-2.2-3.563c-.4-.65-1.35-1.137-2.1-1.1l-4.175.213c-2.987.15-3.837-1.575-1.887-3.85l2.475-2.875c.462-.538.675-1.538.462-2.213L7.35 8.038c-.738-2.375.587-3.688 2.95-2.913l3.687 1.213c.625.2 1.563.062 2.088-.325l3.85-2.775c2.075-1.5 3.737-.625 3.687 1.937zM29.387 27.5 25.6 23.713" />
    </g>
    <defs>
      <filter
        id="fav_svg__a"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5793_11025" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_5793_11025" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgFav;
