import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { getStoreItem } from '@RootLibs/utils/localStorage';
import { AUTH_TOKEN_KEY } from '@RootLibs/constants/authTokenKey';

interface Api {
  readonly apiClient: AxiosInstance;
  GET<TData = unknown>(
    url: string,
    config?: AxiosRequestConfig<TData>
  ): Promise<AxiosResponse<TData>>;
  POST<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables,
    config?: AxiosRequestConfig<TVariables>
  ): Promise<AxiosResponse<TData>>;
  PUT<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables,
    config?: AxiosRequestConfig<TVariables>
  ): Promise<AxiosResponse<TData>>;
  DELETE<TData = unknown>(
    url: string,
    config?: AxiosRequestConfig<TData>
  ): Promise<AxiosResponse<TData>>;
}

class ApiImpl implements Api {
  constructor(public readonly apiClient: AxiosInstance) {
    // interceptors
    this.apiClient.interceptors.request.use(
      (config) => {
        const token = getStoreItem(AUTH_TOKEN_KEY);
        if (token) {
          config.headers!['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  GET<TData = unknown>(url: string, config?: AxiosRequestConfig<TData>) {
    return this.apiClient.get<TData>(url, config);
  }

  POST<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables,
    config?: AxiosRequestConfig<TVariables>
  ) {
    return this.apiClient.post<TVariables, TData>(url, data, config);
  }

  PUT<TVariables = unknown, TData = unknown>(
    url: string,
    data?: TVariables,
    config?: AxiosRequestConfig<TVariables>
  ) {
    return this.apiClient.put<TVariables, TData>(url, data, config);
  }

  DELETE<TData = unknown>(url: string, config?: AxiosRequestConfig<TData>) {
    return this.apiClient.delete<TData>(url, config);
  }
}

const API: Api = new ApiImpl(
  axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? process.env.API_BASE_URL
        : 'http://localhost:8080',
    timeout: 5000,
  })
);

export default API;
