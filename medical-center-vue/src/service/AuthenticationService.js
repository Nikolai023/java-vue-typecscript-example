import axios from 'axios';
import { API_URL } from './ApiConstants';

const AUTH_URL = `${API_URL}/auth`;
const REGISTER_URL = `${API_URL}/register`;
const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
const USER_NAME_SESSION_ATTRIBUTE_ADMIN_MARKER = 'isAdmin';
const USER_NAME_SESSION_ATTRIBUTE_TOKEN = 'token';

const ADMIN_AUTHORITY_NAME = 'ADMIN';

class AuthenticationService {
  constructor() {
    this.initInterceptorIfAvailable();
  }

  initInterceptorIfAvailable() {
    const token = this.getToken();
    if (token) {
      console.log(token);
      this.setupAxiosInterceptors(token);
    }
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get(AUTH_URL,
      { headers: { authorization: this.createBasicAuthToken(username, password) } });
  }

  registerNewUser = (username, password) => axios.post(REGISTER_URL, {
    login: username,
    password,
  });

  createBasicAuthToken = (username, password) => `Basic ${window.btoa(`${username}:${password}`)}`;

  registerSuccessfulLogin(userDetails, password) {
    this.clearSessionStorage();
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userDetails.data.principal);
    if (userDetails.data.authorities.some(role => role === ADMIN_AUTHORITY_NAME)) {
      sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_ADMIN_MARKER, '.');
    }
    const token = this.createBasicAuthToken(userDetails.data.principal, password);
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_TOKEN, token);
    this.setupAxiosInterceptors(token);
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use(
      (config) => {
        if (this.isAuthorized()) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = token;
        }
        return config;
      },
    );
  }

  isAuthorized = () => {
    const user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user !== null;
  };

  isAdmin = () => {
    const isAdmin = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_ADMIN_MARKER);
    return isAdmin && isAdmin !== '';
  };

  getToken = () => sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_TOKEN);

  clearSessionStorage = () => {
    sessionStorage.clear();
  };

  logout() {
    this.clearSessionStorage();
  }
}

export default new AuthenticationService();
