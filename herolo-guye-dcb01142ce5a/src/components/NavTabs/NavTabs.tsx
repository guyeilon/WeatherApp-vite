import React from 'react';
import styled, { css } from 'styled-components';
import NavTab, { NavTabProps } from './NavTab';

interface NavTabsProps {
  tabsList: NavTabProps[];
}

const NavTabs: React.FC<NavTabsProps> = ({ tabsList }) => (
  <StyledNavContainer tabsList={tabsList}>
    {tabsList.map((tab, idx) => (
      <TabWrapper index={idx} tabsList={tabsList} key={tab.children}>
        <NavTab {...tab} />
      </TabWrapper>
    ))}
  </StyledNavContainer>
);

export default NavTabs;

const StyledNavContainer = styled.div<NavTabsProps>`
  display: grid;
  grid-template-columns: ${({ tabsList }) => tabsList.reduce(acc => `${acc} 1fr`, '')};
  height: 80px;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background.navigation.mobile[theme.mode]};
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0;
  z-index: 3;
  backdrop-filter: blur(3px);
`;

const TabWrapper = styled.div<{ index: number } & NavTabsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 57%;
  align-self: center;

  ${({ tabsList, index }) =>
    index !== tabsList.length - 1 &&
    css`
      border-right: 1px solid white;
    `}
`;
