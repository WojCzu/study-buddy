import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  position: relative;

  align-items: center;
  padding: 20px 0;
  cursor: pointer;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledInfo = styled.div`
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    margin: 0;
  }

  p:first-child {
    display: flex;
    align-items: center;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
