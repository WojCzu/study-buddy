import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const shringAnimation = keyframes`
from{
    transform: translateX(-50%) scaleX(1);
}
to{
    transform: translateX(-50%) scaleX(0);
}
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;

  padding: 40px 25px 15px;
  min-width: 200px;
  max-width: 550px;

  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.error};

  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 6.4s ease-in-out 1 reverse forwards;

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 16px;

    width: 80px;
    height: 5px;

    background-color: ${({ theme }) => theme.colors.error};
    border-radius: 5px;
    transform: translateX(-50%);
  }

  &::before {
    opacity: 0.5;
  }

  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shringAnimation} 5s 1.2s linear 1 forwards;
  }
`;
