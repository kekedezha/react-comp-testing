/**
 * Tasks:
 * 
 * 1. If isLoading is true, render:
 *      <p>Loading account summary...</p>
 * 2. Compute totalBalance = sum of all account balances
 * 3. Render a card with:
 *      - User's name (Account Summary for [name])
 *      - Total Balance (Total Balance: $XXX.XX)
 */

// AccountSummary.tsx
import React from "react";

export type Account = {
    id: string;
    type: "Checking" | "Savings";
    balance: number;
};

type AccountSummaryProps = {
    name: string;
    accounts: Account[];
    isLoading: boolean;
};

const AccountSummary: React.FC<AccountSummaryProps> = ({
    name,
    accounts,
    isLoading,
}) => {
    // 1. Show loading message or spinner if isLoading is true
    // 2. Compute total balance of all accounts
    // 3. Render name and total balance in a styled card
    const getTotalBalance = (): number => {
        return accounts.reduce((total, account) => total + account.balance, 0)
    }

    const totalBalance = getTotalBalance();

    return <div>
        {isLoading && <p>Loading account summary ...</p>}
        {!isLoading && (
            <>
                <h2>Account summary for {name}</h2>
                <p>Total Balance: ${totalBalance.toFixed(2)}</p>
            </>
        )}
    </div>;
};

export default AccountSummary;
