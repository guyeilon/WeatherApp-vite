import React from 'react';
import DesktopNavbar from 'components/Layout/Navbar/DesktopNavbar';
import { useMediaQuery } from 'usehooks-ts';
import breakpoints from 'styles/theme/breakpoints';
import MobileNavbar from './MobileNavbar';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const isMobile = useMediaQuery(breakpoints.max.mobile);
  const [isLogoutModalExpanded, setIsLogoutModalExpanded] = React.useState<boolean>(false);

  return isMobile ? (
    <MobileNavbar isLogoutModalExpanded={isLogoutModalExpanded} setIsLogoutModalExpanded={setIsLogoutModalExpanded} />
  ) : (
    <DesktopNavbar isLogoutModalExpanded={isLogoutModalExpanded} setIsLogoutModalExpanded={setIsLogoutModalExpanded} />
  );
};

export default Navbar;
