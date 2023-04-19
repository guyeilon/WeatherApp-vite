import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { CloseCircle } from 'icons';
import IconButton from 'common/IconButton/IconButton';
import Backdrop from 'common/Backdrop/Backdrop';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import breakpoints from 'styles/theme/breakpoints';

export interface ModalProps extends StylesProps {
  children: ReactNode;
  onClose: VoidFunction;
  title?: string;
}

interface StylesProps {
  width?: string;
  height?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, height = 'auto', width = '502px', title }: ModalProps) => {
  const isMobile = useMediaQuery(breakpoints.max.mobile);

  const animationVariants = () => {
    const animationFrom = isMobile ? 1 : -1;
    return {
      hidden: { y: 1000 * animationFrom, opacity: 0, transition: { duration: 0.1 } },
      visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 30, stiffness: 300 } },
    };
  };

  const handleClick = (event: React.SyntheticEvent): void => {
    event.stopPropagation();
  };

  return (
    <Backdrop onBackdropClick={() => onClose()}>
      <StyledModal
        onClick={handleClick}
        height={height}
        width={width}
        as={motion.div}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants()}
      >
        <StyledCloseButton onClick={() => onClose()} icon={<CloseCircle width="30px" height="30px" />} />
        {title && <StyledTitle>{title}</StyledTitle>}
        {children}
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;

const StyledModal = styled.div<StylesProps>`
  box-shadow: 0rem 0.25rem 5rem rgba(0, 0, 0, 0.16);
  z-index: 99;
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: #ffffff;
  border-radius: 1.875rem;
  padding: 3rem;
  margin: 0 auto;
  top: 125px;
  @media ${({ theme }) => theme.breakpoints.max.mobile} {
    position: absolute;
    bottom: 0;
    top: unset;
    border-radius: 1.875rem 1.875rem 0rem 0rem;
    width: 100%;
    padding: 2.5rem 1.875rem;
  }
`;

const StyledCloseButton = styled(IconButton)`
  top: 2rem;
  right: 2rem;
  position: absolute;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.max.mobile} {
    display: none;
  }
`;
const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.h2};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.25;
  margin-bottom: 16px;
`;
