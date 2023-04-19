import { SVGProps } from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 36.667h10c8.333 0 11.667-3.334 11.667-11.667V15c0-8.333-3.334-11.667-11.667-11.667H15C6.667 3.333 3.333 6.667 3.333 15v10c0 8.333 3.334 11.667 11.667 11.667z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.1 25.883 16.233 20l5.867-5.883"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowLeft;
