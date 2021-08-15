import { render, screen, fireEvent, waitFor } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import SearchBar from './SearchBar';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);

    screen.getByText('Teacher');
    screen.getByPlaceholderText('find student');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('find student');
    fireEvent.change(input, { target: { value: 'ad' } });

    await screen.findByText(/am Romański/);
  });

  it('Hides the results when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('find student');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/am Romański/);

    fireEvent.change(input, { target: { value: '' } });

    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });
});
