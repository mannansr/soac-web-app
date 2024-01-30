export const auth0Configuration = {
  // configurationBaseUrl: 'https://cdn.us.auth0.com',
  container: 'auth0-main',
  auth: {
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    params: {
      scope: 'openid profile email',
    },
    // params: config.internalOptions
    redirect: true,
    responseType: 'token id_token',
  },
  // configurationBaseUrl: config.clientConfigurationBaseUrl,
  // overrides: {
  //   __tenant: config.auth0Tenant,
  //   __token_issuer: config.authorizationServer.issuer
  // },
  // assetsUrl:  config.assetsUrl,
  allowedConnections: ['Username-Password-Authentication'],
  // rememberLastLogin: !prompt,
  // language: language,
  // languageBaseUrl: config.languageBaseUrl,
  languageDictionary: {
    loginLabel: 'Sign In',
    loginSubmitLabel: 'Sign In',
    title: '',
    signUpTitle: '',
  },
  theme: {
    primaryColor: 'rgb(99, 93, 255)',
    labeledSubmitButton: true,
    logo: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png',
  },
  additionalSignUpFields: [
    {
      name: 'phone',
      type: 'phone',
      placeholder: 'Phone Number (+14314314314)',
      // icon: '/phone_icon.png',
    },
  ],
  // prefill: loginHint ? { email: loginHint, username: loginHint } : null,
  closable: false,
  defaultADUsernameFromEmailPrefix: false,
  rememberLastLogin: false,
};
