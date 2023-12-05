import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test('renders GitHubCard', () => {
  render(<App />)
  const nameElement = screen.getByText(/chrisebrell/i)
  expect(nameElement).toBeInTheDocument()
});
