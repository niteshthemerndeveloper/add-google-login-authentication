import React from 'react';
import { GoogleLogin } from 'react-google-login';
import PropTypes from 'prop-types';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup.js';

const Login = ({ clientId }) => {
  const handleOnSuccess = (res) => {
    console.log('[Login Success] currentUser: ', res.profileObj);

    // Initializing the setup for token refresh
    refreshTokenSetup(res);
  };

  const handleOnFailure = (res) => {
    console.log('[Login Failed] res: ', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={handleOnSuccess}
        onFailure={handleOnFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

Login.propTypes = {
  clientId: PropTypes.string.isRequired,
};

export default Login;
