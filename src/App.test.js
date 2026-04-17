// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StorjCloud title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StorjCloud/i);
    expect(titleElement).toBeInTheDocument();
});
