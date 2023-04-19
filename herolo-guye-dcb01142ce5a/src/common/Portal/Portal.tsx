import * as ReactDOM from 'react-dom';

type PortalProps = React.PropsWithChildren<{}>;
const portalRoot = document.getElementById('portal') as HTMLElement;

const Portal = ({ children }: PortalProps) => ReactDOM.createPortal(children, portalRoot);

export default Portal;
