import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'antd/dist/antd.css';
import { Button, Input, message } from 'antd';
import * as Yup from 'yup';
import UsersLayout from '@RootComponents/UsersLayout';
import Link from 'next/link';
import { postSignIn } from 'pages/root.api/api';

type SignInValue = {
  userId: string;
  userPw: string;
};

const SignIn = () => {
  const validationSchema = Yup.object().shape({
    userId: Yup.string().required('아이디를 입력해주세요.'),
    userPw: Yup.string().required('비밀번호를 입력해주세요.'),
  });

  return (
    <UsersLayout>
      <Formik
        initialValues={{
          userId: '',
          userPw: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: SignInValue) => {
          console.log(values.userId);
          console.log(values.userPw);

          postSignIn({ userId: values.userId, userPw: values.userPw }).then(
            (response) => {
              message.info('회원기능은 곧 오픈될 기능입니다.', 0.5);
            }
          );
        }}
      >
        <Form>
          <Field name="userId">
            {({ field }) => {
              return (
                <Input
                  {...field}
                  className="input-style"
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

          <Button htmlType="submit" className="btn-submit">
            로그인
          </Button>
        </Form>
      </Formik>

      <div className="link-wrapper">
        <Link href="/users/sign_up">
          <a className="link">회원가입</a>
        </Link>
      </div>
    </UsersLayout>
  );
};

export default SignIn;
