import { MutationFunction, useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { message } from 'antd';
import API from '@RootModules/api';
import { API_JOIN } from '@RootModules/api/queryKey';
import {
  JoinError,
  JoinInputType,
  LoginInputType,
} from '@FeatureLogin/libs/types';
import { SUCCESS_JOIN } from '@FeatureLogin/libs/constants/loginAlertMessages';

const requestPostJoin: MutationFunction<unknown, LoginInputType> = async (
  inputValues
) => {
  await API.POST<JoinInputType, unknown>(API_JOIN, inputValues);
};

const useJoinMutation = () => {
  const router = useRouter();
  return useMutation<unknown, JoinError, JoinInputType>(requestPostJoin, {
    onSuccess: () => {
      message.success(SUCCESS_JOIN, 0.5);
      router.replace('/login');
    },
    onError: (error) => {
      message.error(error.response?.data.details, 0.5);
    },
  });
};

export default useJoinMutation;
