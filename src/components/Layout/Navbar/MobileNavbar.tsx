import { NavTabProps } from 'components/NavTabs/NavTab';
import NavTabs from 'components/NavTabs/NavTabs';
import { Fav, FavFull, HomeFull, HomeOutline, Search, Menu, LogoutDark, Arrow } from 'icons';
import { ProtectedPath } from 'routes/paths';
import React from 'react';
import styled from 'styled-components';
import IconButton from 'common/IconButton';
import Modal from 'common/Modal/Modal';
import Button from 'common/Button/Button';
import ConfirmLogout from 'components/Layout/Navbar/ConfirmLogout';
import Switchers from './Switchers';
import SearchCity from './SearchCity';

interface MobileNavbarProps {
  isLogoutModalExpanded: boolean;
  setIsLogoutModalExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isLogoutModalExpanded, setIsLogoutModalExpanded }) => {
  const [isMenuModalExpanded, setIsMenuModalExpanded] = React.useState<boolean>(false);
  const [isSearchModalExpanded, setIsSearchModalExpanded] = React.useState<boolean>(false);

  const navTabs: NavTabProps[] = [
    {
      renderAs: 'link',
      to: ProtectedPath.Home,
      icon: { active: <HomeFull />, inactive: <HomeOutline /> },
      children: 'home',
    },
    {
      renderAs: 'button',
      onClick: () => setIsSearchModalExpanded(true),
      icon: { active: <Search />, inactive: <Search /> },
      children: 'Search',
    },
    {
      renderAs: 'link',
      to: ProtectedPath.Favorites,
      icon: { active: <FavFull />, inactive: <Fav /> },
      children: 'favorites',
    },
  ];

  return (
    <>
      <MobileMenu>
        <MenuBtn icon={<Menu height="30" width="30" />} onClick={() => setIsMenuModalExpanded(true)} />
      </MobileMenu>
      <NavTabs tabsList={navTabs} />
      {isMenuModalExpanded && (
        <Modal title="Menu" onClose={() => setIsMenuModalExpanded(false)} height="416px">
          <ContentWrapper>
            <Switchers />
            <Button
              color="secondary"
              variant="text"
              size="sm"
              icon={<LogoutDark width={30} height={30} />}
              onClick={() => {
                setIsLogoutModalExpanded(true);
                setIsMenuModalExpanded(false);
              }}
            >
              Logout
            </Button>
          </ContentWrapper>
        </Modal>
      )}
      {isSearchModalExpanded && (
        <Modal onClose={() => setIsSearchModalExpanded(false)} title="" height="80%">
          <SearchContainer>
            <IconButton icon={<Arrow width={30} height={30} />} onClick={() => setIsSearchModalExpanded(false)} />
            <SearchCity />
          </SearchContainer>
        </Modal>
      )}
      {isLogoutModalExpanded && <ConfirmLogout onClose={() => setIsLogoutModalExpanded(false)} />}
    </>
  );
};

export default MobileNavbar;

const MobileMenu = styled.div.attrs({ className: 'app-mobile-menu' })`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 24px;
  padding: 0 30px;
`;

const MenuBtn = styled(IconButton)`
  align-self: flex-end;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div.attrs({ className: 'app-search-container' })`
  height: 100%;

  .input-wrapper {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 12px;
  }
  .app-AutoCompleteWrapper {
    height: 100%;
  }
  .app-options-display {
    flex: 1;
    height: unset;
    width: 100%;
    border-radius: unset;
    box-shadow: unset;

    height: 100%;
  }
  .search-results-options::-webkit-scrollbar {
    display: none;
  }
  .app-option-display {
    padding: 16px 0;
    font-size: 1.125rem;
    line-height: 22px;
  }
`;
