import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  min-height: 110px;
  height: auto;
  max-height: 700px;

  position: absolute;
  right: 0;
  top: 40px;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(400px)'};
  transition: transform 0.4s ease-in-out;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 16px 0 0 16px;
`;

export const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;

  position: absolute;
  left: 0;
  top: 0;

  transform: translateX(-100%) rotate(-90deg) translateY(-15px);
  transform-origin: right center;
  border-radius: 8px 8px 0 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  cursor: pointer;
`;

export const NotesWrapper = styled.div`
  max-height: 700px;
  padding: 20px 60px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;
