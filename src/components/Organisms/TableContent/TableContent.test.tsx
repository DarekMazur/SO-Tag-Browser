import { render, screen } from '../../../test-utils';
import TableContent from './TableContent.tsx';

describe('Search Bar', () => {
  it('Renders the component', () => {
    const { container } = render(<TableContent />);
    expect(container).toMatchSnapshot();
  });
  it('Displays table items from API', async () => {
    render(<TableContent />);
    screen.findAllByText(/Loading/);
    await screen.findAllByText(/javascript/);
  });
});
