import { render } from '@testing-library/react';
import Picker from './Picker';

test('renders the Picker panel', () => {
  const container = render(<Picker head="Head" />);
  expect(container).toMatchSnapshot();
});
