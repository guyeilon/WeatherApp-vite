import { SVGProps } from 'react';

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.538 4.463c.224-.123.462.065.462.32v17.04c0 .223-.151.413-.353.509a2.207 2.207 0 0 0-.11.056L6.6 24.063c-2.05 1.175-3.737.2-3.737-2.175V9.725c0-.787.562-1.762 1.262-2.162l5.413-3.1zm8.934 3.199a.5.5 0 0 1 .278.448v16.718a.5.5 0 0 1-.717.45l-5.563-2.68a.5.5 0 0 1-.283-.45V5.355a.5.5 0 0 1 .722-.448l5.563 2.755zm9.028.451v12.162c0 .788-.563 1.763-1.262 2.163l-4.552 2.608a.5.5 0 0 1-.748-.434V7.84a.5.5 0 0 1 .252-.434l2.572-1.468c2.05-1.175 3.738-.2 3.738 2.175z"
      fill="#fff"
    />
  </svg>
);
export default SvgMap;
