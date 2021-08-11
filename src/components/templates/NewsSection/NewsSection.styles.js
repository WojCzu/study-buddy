import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: auto;
  padding: 50px;

  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const NewsSectionHeader = styled(Title)`
  margin-right: auto;
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  max-width: unset;

  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    margin-left: 35px;
    object-fit: cover;
  }
`;
