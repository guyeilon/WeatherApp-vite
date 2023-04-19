import { SVGProps } from 'react';

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.785 13.75H25v2.5H9.785l6.705 6.705-1.767 1.767L5 15l9.723-9.723 1.767 1.768-6.705 6.705z"
      fill="#444E72"
    />
  </svg>
);
export default SvgArrow;
