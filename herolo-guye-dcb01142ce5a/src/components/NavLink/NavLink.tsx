import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';

interface NavLinkProps {
  icon: Record<'active' | 'inactive', JSX.Element>;
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, to, label }) => (
  <StyledNavLink to={to} end>
    {({ isActive }) => (
      <>
        {isActive ? icon.active : icon.inactive}
        <div>{label}</div>
        <LinkBorder />
      </>
    )}
  </StyledNavLink>
);

export default NavLink;

const LinkBorder = styled.div.attrs({ className: 'app-link-border' })`
  width: 100%;
  border-bottom: 5px solid #fff;
  display: none;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const StyledNavLink = styled(BaseNavLink).attrs({ className: 'app-nav-link' })`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 11px;
  text-transform: capitalize;
  padding: 0 15px;
  height: 100%;
  color: ${({ theme }) => theme.colors.palette.white};
  /* margin-top: 5px; */
  font-size: ${({ theme }) => theme.typography.sizes.button};
  width: fit-content;
  position: relative;

  &.active .app-link-border {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
  & > div {
    margin-top: 3px;
  }
`;
