import { render, screen, fireEvent } from '../../../test-utils';
import TableWrapper from './TableWrapper.tsx';

describe('Search Bar', () => {
  it('Renders the component', () => {
    const { container } = render(<TableWrapper />);
    expect(container).toMatchSnapshot();
  });

  // eslint-disable-next-line vitest/expect-expect
  it('Displays default items range in pagination', async () => {
    render(<TableWrapper />);
    await screen.findByText(/1–5/);
  });
  // eslint-disable-next-line vitest/expect-expect
  it('Displays total items in pagination', async () => {
    render(<TableWrapper />);
    await screen.findByText(/20/);
  });
  // eslint-disable-next-line vitest/expect-expect
  it('Displays next page after click in pagination', async () => {
    render(<TableWrapper />);
    const nextButton = screen.getByLabelText('next page');
    fireEvent.click(nextButton);
    await screen.findByText(/6–10/);
  });
  // eslint-disable-next-line vitest/expect-expect
  it('Displays table headers', async () => {
    render(<TableWrapper />);
    await screen.findByText(/Posts count/);
  });
});
