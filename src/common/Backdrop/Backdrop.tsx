import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Portal from 'common/Portal';

type BackdropProps = React.PropsWithChildren<{ onBackdropClick?: MouseEventHandler<HTMLDivElement> }>;

const StyledBackdrop = styled.div.attrs({ className: 'app-backdrop' })`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 99;
`;

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Backdrop = ({ children, onBackdropClick }: BackdropProps) => (
  <Portal>
    <AnimatePresence>
      <StyledBackdrop
        onClick={onBackdropClick}
        as={motion.div}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
      >
        {children}
      </StyledBackdrop>
    </AnimatePresence>
  </Portal>
);

export default Backdrop;
