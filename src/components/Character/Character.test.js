import { render, screen } from '@testing-library/react';
import Character from './Character';

test('renders the Character panel', () => {
  const container = render(<Character head="Head" />);
  expect(container).toMatchSnapshot();
});
