import { render, screen } from '../../../test-utils.tsx';
import Title from './Title.tsx';

describe('Tag link', () => {
  it('Renders the component', () => {
    const { container } = render(<Title label="Title label" />);
    expect(container).toMatchSnapshot();
  });
  it('Renders with prop', () => {
    render(<Title label="Title label" />);
    expect(screen.getByText(/Title/)).toBeInTheDocument();
  });
});
