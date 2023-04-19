import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

type Icon = Record<'active' | 'inactive', JSX.Element>;

export type NavTabProps = { children: string } & { icon?: Icon } & (
    | { renderAs: 'link'; to?: string; onClick?: never }
    | {
        renderAs: 'button';
        onClick?: VoidFunction;
        to?: never;
      }
  );

const NavTab = ({ renderAs, children, to, onClick, icon }: NavTabProps) =>
  renderAs === 'link' && to ? (
    <StyledLinkTab to={to} end>
      {({ isActive }) => (
        <>
          {isActive ? icon?.active : icon?.inactive}
          {children}
        </>
      )}
    </StyledLinkTab>
  ) : (
    <StyledButtonTab type="button" onClick={onClick}>
      <>
        {icon?.active}
        {children}
      </>
    </StyledButtonTab>
  );

export default NavTab;

const NavTabStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
  margin: 0 auto;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.white};
  text-transform: capitalize;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const StyledLinkTab = styled(NavLink).attrs({ className: 'app-NavTab-link' })`
  ${NavTabStyle}
`;
const StyledButtonTab = styled.button.attrs({ className: 'app-NavTab-button' })`
  ${NavTabStyle}
`;
