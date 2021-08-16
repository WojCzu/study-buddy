import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from 'components/molecules/UsersListItem/UsersListItem.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 50px;

  ${StyledAverage} {
    width: 68px;
    height: 68px;

    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  ${Title} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
export const ContentWrapper = styled.div`
  margin-left: 34px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Detail = styled.div`
  margin: 20px 0;

  p {
    margin: 0;
  }
  p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  > :first-child {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  > :not(:first-child) {
    letter-spacing: 0.03em;
  }
`;
export const Grades = styled.div`
  width: fit-content;
  & > div {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    ${StyledAverage} {
      width: 40px;
      height: 40px;
      margin-left: 40px;
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;
