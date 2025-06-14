import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccountSummary from './AccountSummary';
import type { Account } from './AccountSummary';

describe('AccountSummary', () => {
    const mockAccounts: Account[] = [
        { id: 'a1', type: 'Checking', balance: 1500 },
        { id: 'a2', type: 'Savings', balance: 3000 },
    ];

    it('displays loading message when isLoading is true', () => {
        render(<AccountSummary name="Alice" accounts={[]} isLoading={true} />);
        expect(screen.getByText(/loading account summary/i)).toBeInTheDocument();
    });

    it('displays name and total balance when isLoading is false', () => {
        render(<AccountSummary name="Alice" accounts={mockAccounts} isLoading={false} />);
        expect(screen.getByText(/account summary for alice/i)).toBeInTheDocument();
        expect(screen.getByText(/total balance: \$4500/i)).toBeInTheDocument();
    });

    it('handles empty accounts array with total balance of $0', () => {
        render(<AccountSummary name="Bob" accounts={[]} isLoading={false} />);
        expect(screen.getByText(/total balance: \$0/i)).toBeInTheDocument();
    });
});
