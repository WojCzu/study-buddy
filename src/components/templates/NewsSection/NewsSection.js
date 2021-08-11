import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import {
  Wrapper,
  NewsSectionHeader,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, itaque exercitationem autem in modi velit nostrum facilis molestias eos aspernatur.',
  },
  {
    title: 'New computers at school 2',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, itaque exercitationem autem in modi velit nostrum facilis molestias eos aspernatur.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school 3',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, itaque exercitationem autem in modi velit nostrum facilis molestias eos aspernatur.',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data
        ? data.map(({ title, category, content, image = null }) => (
            <ArticleWrapper key={title}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image} alt="" /> : null}
              </ContentWrapper>
              <Button isBig>Read more</Button>
            </ArticleWrapper>
          ))
        : null}
    </Wrapper>
  );
};

export default NewsSection;
