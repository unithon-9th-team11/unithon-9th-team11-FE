import axios from 'axios';

const API_BASE_URL = 'http://3.37.82.186:8080';
// user 3의 토큰

const AuthAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

AuthAPI.interceptors.request.use(
  (config) => {
    // 임시로 토큰 껴넣었음
    const token = sessionStorage.getItem('_token');
    if (token) {
      // eslint-disable-next-line
      config.headers!['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const postSignIn = ({ userId, userPw }) => {
  return AuthAPI.post('/api/v1/account/login', {
    id: userId,
    password: userPw,
  });
};

export const postSignUp = ({ userId, userPw }) => {
  return AuthAPI.post('/api/v1/account/register', {
    id: userId,
    password: userPw,
  });
};
