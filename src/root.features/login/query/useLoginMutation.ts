import { MutationFunction, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { message } from 'antd';
import API from '@RootModules/api';
import { API_LOGIN } from '@RootModules/api/queryKey';
import { setStoreItem } from '@RootModules/utils/localStorage';
import { AUTH_TOKEN_KEY } from '@RootModules/constants/authTokenKey';
import {
  LoginError,
  LoginInputType,
  LoginResponse,
} from '@FeatureLogin/libs/types';
import { SUCCESS_LOGIN } from '@FeatureLogin/libs/constants/loginAlertMessages';

const requestPostLogin: MutationFunction<
  LoginResponse,
  LoginInputType
> = async (inputValues) => {
  const res = await API.POST<LoginInputType, LoginResponse>(
    API_LOGIN,
    inputValues
  );
  return res.data;
};

const useLoginMutation = () => {
  const router = useRouter();
  return useMutation<LoginResponse, LoginError, LoginInputType>(
    requestPostLogin,
    {
      onSuccess: (data) => {
        const token = data.token;
        setStoreItem(AUTH_TOKEN_KEY, token);
        message.success(SUCCESS_LOGIN, 0.5);
        router.replace('/');
      },
      onError: (error) => {
        message.error(error.response?.data.details, 0.5);
      },
    }
  );
};

export default useLoginMutation;
