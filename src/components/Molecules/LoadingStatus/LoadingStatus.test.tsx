import { render, screen } from '../../../test-utils.tsx';
import LoadingStatus from './LoadingStatus.tsx';

describe('Loading status', () => {
  it('Renders the component', () => {
    const { container } = render(<LoadingStatus status="loading" />);
    expect(container).toMatchSnapshot();
  });
  it('Renders the component with loading status', () => {
    render(<LoadingStatus status="loading" />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
  it('Renders the component with error status', () => {
    render(<LoadingStatus status="error" />);
    expect(screen.getByText(/wrong/)).toBeInTheDocument();
  });
});
