import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  margin-bottom: 50px;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.darkPurple};
    transform: translateY(25px);
  }

  ${Title} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;
export const ContentWrapper = styled.div`
  margin-left: 34px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Detail = styled.div`
  margin: 20px 0;

  p {
    margin: 0;
  }
`;
export const DetailLabel = styled.h3`
  font-weight: bold;
  display: inline;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const DetailInfo = styled.p`
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.l};
  letter-spacing: 0.03em;
  display: ${({ isInline }) => (isInline ? 'inline' : 'block')}; ;
`;

export const StyledGrades = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  margin: 15px 0;
`;
