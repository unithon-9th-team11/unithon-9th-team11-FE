import axios from 'axios';
import { resolveSoa } from 'dns/promises';

const API_BASE_URL = 'http://3.37.82.186:8080';
// user 3의 토큰

const AuthAPI = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 5000,
});

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3b24iLCJyb2xlcyI6IlVTRVIiLCJpYXQiOjE2NjIyNDI5MDAsImV4cCI6MTY2MzQ1MjUwMH0.oEL4si8rZwY4hnaLwX2gfT-PevaKeRPSDD8qQXAp-oA';

AuthAPI.interceptors.request.use(
  (config) => {
    // 임시로 토큰 껴넣었음
    // const token = sessionStorage.getItem('_token');
    if (token) {
      // eslint-disable-next-line
      config.headers!['Authorization'] = `Bearer ${token}`;
    }
    // config.headers!['Access-Control-Allow-Origin'] = '*';
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

export const postChemy = async (inputData) => {
  const res = await AuthAPI.post('/api/v1/chemy', inputData);
  return res.data;
};

export const getCheckIdx = async (idx) => {
  const res = await AuthAPI.get(`/api/v1/chemy/${idx}/check`);
  return res.data;
};

export const getChemyData = (idx) => async () => {
  console.log('adsopfjdf');
  const res = await AuthAPI.get(`/api/v1/chemy/${idx}`);
  return res.data;
};

export default AuthAPI;
