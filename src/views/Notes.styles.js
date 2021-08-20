import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: minmax(290px, 1fr) 1.5fr;
  grid-gap: 16px;
  padding: 30px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 40px 40px 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;

  div {
    width: 100%;
  }
`;

export const StyledFormField = styled(FormField)`
  margin-bottom: 10px;
  width: 100%;
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

export const NotesWrapper = styled.div`
  padding: 20px 60px;

  display: flex;
  flex-direction: column;
`;
