import ConfirmationModal from 'common/ConfirmationModal/ConfirmationModal';
import React from 'react';
import useLogin from 'screens/Auth/Login/hooks/useLogin';

interface ConfirmLogoutProps {
  onClose: VoidFunction;
}

const ConfirmLogout: React.FC<ConfirmLogoutProps> = ({ onClose }) => {
  const { logout } = useLogin();
  return (
    <ConfirmationModal
      title="Logout"
      confirmTxt="Yes, log out"
      cancelTxt="I want to stay"
      onCancel={() => onClose()}
      onClose={() => onClose()}
      onConfirm={logout}
      width="502px"
    >
      <p>You about to log out from WeatherApp. Are you sure you want to log out?</p>
    </ConfirmationModal>
  );
};

export default ConfirmLogout;
