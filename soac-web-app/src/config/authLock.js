import { Auth0Lock } from 'auth0-lock';
import { auth0Configuration } from './auth0Config';
import { auth0ClientId, auth0Domain } from './variable';

const lock = new Auth0Lock(auth0ClientId, auth0Domain, auth0Configuration);

export default lock;
