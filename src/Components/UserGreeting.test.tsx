import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserGreeting from './UserGreeting';

describe('UserGreeting', () => {
    it('displays message and greets user when user is logged in', () => {
        render(<UserGreeting name="Christian" isLoggedIn={true} />);
        expect(screen.getByText(/welcome back, christian/i)).toBeInTheDocument();
    })

    it('greets user and notifies user that user needs to log in', () => {
        render(<UserGreeting name="Christian" isLoggedIn={false} />);
        expect(screen.getByText(/hello, guest. please log in./i)).toBeInTheDocument();
    })
})