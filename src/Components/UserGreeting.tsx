/**
 * Tasks:
 * 
 * 1. Create the UserGreeting.tsx
 *  Behavior: 
 *      - If isLoggedIn is true render:
 *          "Welcome back, <name>!"
 *      - if isLoggedIn is false render:
 *          "Hello, Guest. Please log in."
 */
// UserGreeting.tsx
import React from "react";

type UserGreetingProps = {
    name: string;
    isLoggedIn: boolean;
};

const UserGreeting: React.FC<UserGreetingProps> = ({
    name,
    isLoggedIn
}) => {
    return <>
        {isLoggedIn && <p>Welcome back, {name}!</p>}
        {!isLoggedIn && <p>Hello, Guest. Please log in.</p>}
    </>
}

export default UserGreeting;