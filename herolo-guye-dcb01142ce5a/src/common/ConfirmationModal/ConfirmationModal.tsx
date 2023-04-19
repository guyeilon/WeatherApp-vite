import Button from 'common/Button';
import Modal, { ModalProps } from 'common/Modal';
import React from 'react';
import styled from 'styled-components';

export interface ConfirmationModalProps extends ModalProps {
  onCancel: VoidFunction;
  onConfirm: VoidFunction;
  cancelTxt?: string;
  confirmTxt?: string;
}

const StyledConfirmBtnContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  padding-top: 48px;

  @media ${({ theme }) => theme.breakpoints.max.mobile} {
    padding-top: 80px;
  }
`;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  onClose,
  onCancel,
  onConfirm,
  cancelTxt,
  confirmTxt,
  children,
}) => (
  <Modal title={title} onClose={onClose}>
    {children}
    <StyledConfirmBtnContainer>
      <Button size="sm" variant="text" color="secondary" onClick={onCancel}>
        {cancelTxt}
      </Button>
      <Button size="md" variant="filled" color="primary" onClick={onConfirm}>
        {confirmTxt}
      </Button>
    </StyledConfirmBtnContainer>
  </Modal>
);

export default ConfirmationModal;
