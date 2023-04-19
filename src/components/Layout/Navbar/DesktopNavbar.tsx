import React from 'react';

import Button from 'common/Button/Button';
import NavLink from 'components/NavLink/NavLink';
import { Fav, FavFull, HomeFull, HomeOutline, Logo, Logout, Map } from 'icons';
import { ProtectedPath } from 'routes/paths';
import styled from 'styled-components';
import breakpoints from 'styles/theme/breakpoints';
import { useMediaQuery } from 'usehooks-ts';
import SearchCity from './SearchCity';
import Switchers from './Switchers';
import ConfirmLogout from './ConfirmLogout';

export interface NavbarProps {
  isLogoutModalExpanded: boolean;
  setIsLogoutModalExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopNavbar: React.FC<NavbarProps> = ({ isLogoutModalExpanded, setIsLogoutModalExpanded }) => {
  const isDesktop = useMediaQuery(breakpoints.min.desktop);

  return (
    <>
      <NavbarContainer>
        <NavLinksSection>
          <StyledLogo />
          <LinksWrapper>
            <NavLink icon={{ active: <HomeFull />, inactive: <HomeOutline /> }} to={ProtectedPath.Home} label="home" />
            <NavLink icon={{ active: <FavFull />, inactive: <Fav /> }} to={ProtectedPath.Favorites} label="favorites" />
          </LinksWrapper>
        </NavLinksSection>
        <SearchSection>
          <SearchCity />
        </SearchSection>
        <SwitchersSection>
          <SwitchersWrapper>
            <Switchers />
          </SwitchersWrapper>
          <MapBtn color="primary" variant="text" size="sm" icon={<Map width={30} height={30} />}>
            {isDesktop ? 'Switch to map' : ''}
          </MapBtn>
          <BtnWrapper>
            <Button
              color="primary"
              variant="text"
              size="sm"
              icon={<Logout width={30} height={30} />}
              onClick={() => setIsLogoutModalExpanded(true)}
            >
              {isDesktop ? 'Logout' : ''}
            </Button>
          </BtnWrapper>
        </SwitchersSection>
      </NavbarContainer>
      {isLogoutModalExpanded && <ConfirmLogout onClose={() => setIsLogoutModalExpanded(false)} />}
    </>
  );
};

export default DesktopNavbar;

const NavbarContainer = styled.div.attrs({ className: 'app-navbar-container' })`
  background: ${({ theme }) => theme.colors.background.navigation.desktop[theme.mode]};
  display: grid;

  position: fixed;
  top: 0;
  z-index: 3;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'navLinksSection searchSection switchersSection ';
  padding: 0 60px;

  align-items: center;
  justify-items: center;
  grid-gap: 10px;

  min-width: 100%;
  height: 94px;

  @media only screen and (${({ theme }) => theme.breakpoints.min.desktop}) {
    padding: 0 70px;
  }
`;
const StyledLogo = styled(Logo).attrs({ className: 'app-navbar-logo' })`
  width: 110px;
  height: 72px;
  display: inline-block;
  @media (${({ theme }) => theme.breakpoints.min.laptop}) {
    width: 86px;
    height: 56px;
  }
`;

export const NavLinksSection = styled.div`
  grid-area: navLinksSection;
  display: flex;
  gap: 10px;

  align-items: center;
  justify-items: center;

  height: 100%;

  @media only screen and (${({ theme }) => theme.breakpoints.min.desktop}) {
    gap: 176px;
  }
`;

const LinksWrapper = styled.div.attrs({ className: 'app-links-wrapper' })`
  display: flex;
  gap: 16px;

  justify-self: center;
  align-items: center;
  height: 100%;
  @media only screen and (${({ theme }) => theme.breakpoints.min.desktop}) {
    gap: 46px;
  }
`;

const SearchSection = styled.div`
  grid-area: searchSection;
`;
const SwitchersSection = styled.div`
  grid-area: switchersSection;
  justify-self: stretch;

  display: grid;
  grid-template-areas: 'toggle map logout';

  grid-template-columns: 1fr fit-content(100%) fit-content(100%);
  @media only screen and (${({ theme }) => theme.breakpoints.min.desktop}) {
    grid-template-areas: 'map toggle logout';
    grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  }

  align-items: center;
  justify-items: center;
  grid-gap: 30px;
  height: 100%;
`;

const SwitchersWrapper = styled.div`
  grid-area: toggle;
`;

const MapBtn = styled(Button)`
  grid-area: map;
`;

const BtnWrapper = styled.div`
  justify-self: end;
  grid-area: logout;
`;
