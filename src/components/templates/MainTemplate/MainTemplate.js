import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;
