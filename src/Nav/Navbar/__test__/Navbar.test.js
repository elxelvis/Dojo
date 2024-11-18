import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test( 'renders learn react link', () => {
    render(<Navbar />);
    const headingElement = screen.getByText(/The Elena blog/i);
    expect(screen.getByText(/The Elena blog/i)).toBeInTheDocument();
}); 