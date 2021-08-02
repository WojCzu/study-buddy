import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;

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

  button {
    align-self: flex-start;
  }
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Attendance = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const UserInfo = styled.div`
  margin-left: 15px;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Average = styled.div`
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  background-color: ${({ theme, children }) => {
    const { colors } = theme;
    if (children < 3) return colors.error;
    if (children < 4) return colors.warning;
    return colors.success;
  }};
`;
