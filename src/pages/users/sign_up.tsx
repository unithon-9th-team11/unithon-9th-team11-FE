import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'antd/dist/antd.css';
import { Button, Input, message } from 'antd';
import * as Yup from 'yup';
import UsersLayout from '@RootComponents/UsersLayout';
import Link from 'next/link';
import { postSignUp } from 'pages/root.api/api';
import Swal from 'sweetalert2';

type SignUpValue = {
  userId: string;
  userPw: string;
  userPwConfirm: string;
};

const SignIn = () => {
  const validationSchema = Yup.object().shape({
    userId: Yup.string().required('아이디를 입력해주세요'),
    userPw: Yup.string().required('비밀번호를 입력해주세요.'),
    userPwConfirm: Yup.string().oneOf(
      [Yup.ref('userPw'), null],
      '비밀번호가 일치하지 않습니다.'
    ),
  });

  return (
    <UsersLayout>
      <Formik
        initialValues={{
          userId: '',
          userPw: '',
          userPwConfirm: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: SignUpValue) => {
          postSignUp({ userId: values.userId, userPw: values.userPw })
            .then(() => {
              Swal.fire({
                icon: 'success',
                title: '회원가입 성공!',
                text: '로그인 페이지로 이동합니다.',
                confirmButtonText: '확인',
              }).then(() => {
                window.location.href = '/users/sign_in';
              });
            })
            .catch(() => {
              Swal.fire({
                icon: 'error',
                title: '오류발생 :(',
                confirmButtonText: '확인',
              });
            });
        }}
      >
        <Form>
          <Field name="userId">
            {({ field }) => {
              return (
                <Input
                  {...field}
                  className="input-style"
                  type="text"
                  autoComplete="false"
                  placeholder="아이디"
                />
              );
            }}
          </Field>

          <div className="validation-msg">
            <ErrorMessage name="userId" />
          </div>

          <Field name="userPw">
            {({ field }) => {
              return (
                <Input.Password
                  {...field}
                  className="input-style"
                  autoComplete="false"
                  placeholder="비밀번호"
                />
              );
            }}
          </Field>

          <div className="validation-msg">
            <ErrorMessage name="userPw" />
          </div>

          <Field name="userPwConfirm">
            {({ field }) => {
              return (
                <Input.Password
                  {...field}
                  className="input-style"
                  autoComplete="false"
                  placeholder="비밀번호 확인"
                />
              );
            }}
          </Field>

          <div className="validation-msg">
            <ErrorMessage name="userPwConfirm" />
          </div>

          <Button htmlType="submit" className="btn-submit">
            회원가입
          </Button>
        </Form>
      </Formik>

      <div className="link-wrapper">
        <Link href="/users/sign_in">
          <a className="link">로그인 페이지로 가기</a>
        </Link>
      </div>
    </UsersLayout>
  );
};

export default SignIn;
