import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, {
  query,
} from 'components/templates/NewsSection/NewsSection';
import { render, screen } from 'test-utils';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    render(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });
    render(<NewsSection />);
    await screen.findAllByText(/Test/);
  });

  it('Displays loading text', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200);
    render(<NewsSection />);
    await screen.findByText('Loading...');
  });
});
