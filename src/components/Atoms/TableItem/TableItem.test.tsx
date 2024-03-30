import { render, screen } from '../../../test-utils';
import TableItem from './TableItem.tsx';

describe('Table Item', () => {
  it('Renders the component', () => {
    const { container } = render(<TableItem label="example" />);
    expect(container).toMatchSnapshot();
  });
  it('Renders with label', () => {
    render(<TableItem label="example" />);
    expect(screen.getByText('example')).toBeInTheDocument();
  });
  it('Renders with style', () => {
    render(<TableItem label="example" align="right" />);
    expect(screen.getByText('example')).toHaveStyle({ textAlign: 'right' });
  });
});
