import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  NewsSectionHeader,
  ArticleWrapper,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
        {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }        
        `,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {articles.length ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="" /> : null}
            </ContentWrapper>
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default NewsSection;
