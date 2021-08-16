import styled from 'styled-components';

export const ModalWrapper = styled.div`
  min-width: 600px;
  min-height: 700px;
  padding: 50px;
  padding-bottom: 25px;

  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
`;

export const ModalBackground = styled.div`
  ::before {
    content: '';

    width: 100%;
    height: 100vh;

    position: absolute;
    left: 0;
    top: 0;

    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
