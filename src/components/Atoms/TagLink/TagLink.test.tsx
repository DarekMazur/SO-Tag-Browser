import { render, screen } from '../../../test-utils';
import TagLink from './TagLink.tsx';

describe('Tag link', () => {
  it('Renders the component', () => {
    const { container } = render(<TagLink to="example" />);
    expect(container).toMatchSnapshot();
  });
  it('Renders with prop', () => {
    render(<TagLink to="example" />);
    expect(screen.getByText(/example/)).toBeInTheDocument();
  });
});
