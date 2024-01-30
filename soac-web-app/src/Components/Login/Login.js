import React, { useEffect } from 'react';
import lock from '../../config/authLock';
import './Login.scss';

const Login = () => {
  useEffect(() => {
    lock.on('signin submit', () => {
      // dispatch(authResultFetching());
    });

    lock.on('signup submit', () => {
      // dispatch(authResultFetching());
    });

    lock.on('unrecoverable_error', (error) => {
      lock.show({
        flashMessage: {
          type: 'error',
          text: error.errorDescription,
        },
      });
      // dispatch(resetAuth());
    });

    lock.on('authorization_error', (error) => {
      lock.show({
        flashMessage: {
          type: 'error',
          text: error.errorDescription,
        },
      });
      // dispatch(resetAuth());
    });

    lock.on('authenticated', (authResult) => {
      console.log('authenticated');
      lock.hide();
      // navigate('/');
      // dispatch(setAuthResult(authResult));
      lock.getUserInfo(authResult.accessToken, (error, profileResult) => {
        console.log('authResult', authResult);
        console.log('profileResult', profileResult);
        // dispatch(setToken(authResult.accessToken));
        // dispatch(setUserData(profileResult));

        if (error) {
          console.log(error);
        }
      });
    });
  }, []);

  useEffect(() => {
    lock.show();
  }, []);

  return <div id="auth0-main" />;
};

export default Login;
