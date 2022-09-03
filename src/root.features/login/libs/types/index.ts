import { AxiosError } from 'axios';

export type LoginInputType = {
  email: string;
  password: string;
};
export type JoinInputType = LoginInputType;

export type LoginResponse = {
  message: string;
  token: string;
};

export type LoginError = AxiosError<{
  details: string;
}>;

export type JoinError = LoginError;
