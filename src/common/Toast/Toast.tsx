import Portal from 'common/Portal';
import useToast from 'hooks/useToast';
import { Check, InfoCircle } from 'icons';
import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type Severity = 'error' | 'success';

interface StyledProps {
  severity: Severity;
  portal: boolean;
}

const StyledToast = styled.div.attrs({ className: 'app-toast' })<StyledProps>`
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 40px;
  gap: 5px;
  border-radius: 10px;

  ${({ severity }) =>
    ({
      success: css`
        background: rgba(0, 0, 0, 0.8);
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: ${({ theme }) => theme.typography.weights.small};
        font-size: ${({ theme }) => theme.typography.sizes.p1};
        @media ${({ theme }) => theme.breakpoints.mobile} {
          font-size: ${({ theme }) => theme.typography.sizes.p2};
        }
      `,
      error: css`
        background: #ffe7e7;
        color: #4d4d4d;
        font-weight: ${({ theme }) => theme.typography.weights.regular};
        font-size: ${({ theme }) => theme.typography.sizes.p2};
      `,
    }[severity])}

  ${({ portal }) =>
    portal &&
    css`
      position: fixed;
      left: calc(50% - 493px / 2);
      bottom: 127px;
      min-width: 493px;
      max-width: 493px;

      @media ${({ theme }) => theme.breakpoints.mobile} {
        left: calc(50% - 354px / 2);
        min-width: 354px;
        max-width: 354px;
      }
    `};
`;

export interface ToastProps extends StyledProps {}

type IToast = {
  title: string;
  severity: 'error' | 'success';
  usePortal: boolean;
};

const portalVariants = {
  hidden: { y: 1000, opacity: 0, transition: { duration: 0.1 } },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 30, stiffness: 300 } },
};
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
};

const Toast = () => {
  const { toasts } = useToast();

  const [toast, setToast] = React.useState<IToast>({ severity: 'success', title: '', usePortal: true });
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (toasts.length > 0) {
      setToast(toasts[toasts.length - 1]);
      setShow(true);
      interval = setTimeout(() => {
        setShow(false);
      }, 3000);
    }
    return () => clearTimeout(interval);
  }, [toasts]);

  let content;
  const ToastComponent = (
    <StyledToast
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="hidden"
      severity={toast.severity}
      portal={toast.usePortal}
      variants={toast.usePortal ? portalVariants : variants}
      transition={spring}
    >
      {toast.severity === 'success' ? <Check height="28" width="28" /> : <InfoCircle height="28" width="28" />}
      {toast.title}
    </StyledToast>
  );

  if (show && toast.usePortal) {
    content = (
      <Portal>
        <div>{ToastComponent}</div>
      </Portal>
    );
  }
  if (show) {
    content = ToastComponent;
  } else {
    content = null;
  }

  return content;
};

export default Toast;
