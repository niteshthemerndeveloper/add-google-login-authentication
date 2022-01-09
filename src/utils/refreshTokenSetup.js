export const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();

    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

    console.log('newAuthResponse: ', newAuthRes);

    // save Users token(newAuthRes.access_token); <-- save new token

    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // setup first timer
  setTimeout(refreshToken, refreshTiming);
};
