import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import FormField from 'components/molecules/FormField/FormField';
import { StyledForm } from './UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledForm onSubmit={handleSubmit(auth.signIn)}>
      <FormField
        label="login"
        name="login"
        id="login"
        {...register('login', { required: true })}
      />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
    </StyledForm>
  );
};

export default UnauthenticatedApp;
