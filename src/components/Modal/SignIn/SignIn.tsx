import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useActionCreator } from '../../../hooks/useActionCreator';
import eye from '../../../images/eye.svg';
import {
  Button,
  ButtonClose,
  CastomInput,
  Container,
  Img,
  Input,
  StyledClose,
  StyledError,
  StyledForm,
  StyledTitle,
  Wrap,
} from './SignIn.styles';

export const SignIn = ({ closeOpenCard }: { closeOpenCard: () => void }) => {
  const [type, setType] = useState('password');
  const toggleInputType = (): void =>
    setType(type === 'password' ? 'text' : 'password');

  const form = useForm({
    initialValues: {
      login: '',
      password: '',
    },

    validate: {
      login: (val) => (val.length === 0 ? 'Invalid email' : null),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  const { setAuth } = useActionCreator();

  const handleSubmit = () => {
    const userData = {
      login: form.values.login,
      password: form.values.password,
    };
    setAuth(userData);
    closeOpenCard();
  };

  return (
    <Wrap>
      <Container>
        <ButtonClose onClick={closeOpenCard}>&times;</ButtonClose>
        <StyledForm onSubmit={form.onSubmit(handleSubmit)}>
          <StyledTitle>Sign in</StyledTitle>
          <CastomInput>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={form.values.login}
              onChange={(event) =>
                form.setFieldValue('login', event.currentTarget.value)
              }
            />
            {form.errors.login && <StyledError>Invalid email</StyledError>}
          </CastomInput>
          <CastomInput>
            <Input
              required
              type={type}
              placeholder="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.currentTarget.value)
              }
            />
            {form.errors.password && (
              <StyledError>
                Password should include at least 6 characters
              </StyledError>
            )}
            <Img src={eye} onClick={toggleInputType} />
          </CastomInput>
          <Button type="submit">Sign in</Button>
          <StyledClose onClick={closeOpenCard}>Close</StyledClose>
        </StyledForm>
      </Container>
    </Wrap>
  );
};
