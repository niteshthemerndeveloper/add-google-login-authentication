import React from 'react';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';

const Logout = ({ clientId }) => {
  const handleLogoutSuccess = (res) => {
    console.log('User logged out successfully ✌');
  };
  return (
    <div>
      <GoogleLogout
        onLogoutSuccess={handleLogoutSuccess}
        buttonText='Logout'
        clientId={clientId}
      />
    </div>
  );
};

Logout.propTypes = {
  clientId: PropTypes.string.isRequired,
};

export default Logout;
