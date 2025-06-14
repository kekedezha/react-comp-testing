import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotificationBanner from './NotificationBanner';

describe('NotificationBanner', () => {
    it('renders nothing when isVisible is false', () => {
        const { container } = render(
            <NotificationBanner message="Hidden message" type="info" isVisible={false} />
        );
        expect(container).toBeEmptyDOMElement();
    });

    it('renders success message with correct class', () => {
        render(
            <NotificationBanner message="Success!" type="success" isVisible={true} />
        );
        const banner = screen.getByText(/success!/i);
        expect(banner).toBeInTheDocument();
        expect(banner).toHaveClass('banner-success');
    });

    it('renders error message with correct class', () => {
        render(
            <NotificationBanner message="Something went wrong." type="error" isVisible={true} />
        );
        const banner = screen.getByText(/something went wrong./i);
        expect(banner).toBeInTheDocument();
        expect(banner).toHaveClass('banner-error');
    });

    it('renders info message with correct class', () => {
        render(
            <NotificationBanner message="Heads up!" type="info" isVisible={true} />
        );
        const banner = screen.getByText(/heads up!/i);
        expect(banner).toBeInTheDocument();
        expect(banner).toHaveClass('banner-info');
    });
});
