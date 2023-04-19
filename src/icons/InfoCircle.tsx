import { SVGProps } from 'react';

const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M25.5 14.25c0 6.186-5.064 11.25-11.25 11.25S3 20.436 3 14.25 8.064 3 14.25 3 25.5 8.064 25.5 14.25zm-11.25-4.8v6"
      stroke="#F0274B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14.244 19.05h.01" stroke="#F0274B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SvgInfoCircle;
