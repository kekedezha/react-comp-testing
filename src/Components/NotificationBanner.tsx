/**
 * Mini Component Challenge (Prompt #1 - Conditional Rendering)
 * 
 * Prompt: Create a React component called NotificationBanner that takes in the following props:
 * type NotificationBannerProps = {
 * message: string;
 * type: "success" | "error" | "info"
 * isVisible: boolean
 * }
 * 
 * Requirements:
 * 1. Only render the banner if isVisible is true
 * 2. Display the message inside the banner depending on the type
 * 3. Add a dynamic className to the banner depending on the type
 *      - "success" => banner-success
 *      - "error" => banner-error
 *      - "info" => banner-info
 * 
 * Example Usage:
 * <NotificationBanner
 *      message="Your changes have been saved!"
 *      type="success"
 *      isVisible={true}
 * />
 */

//NotificationBanner.tsx
import React from "react";

type NotificationBannerProps = {
    message: string;
    type: "success" | "error" | "info";
    isVisible: boolean;
};

const NotificationBanner: React.FC<NotificationBannerProps> = ({ message, type, isVisible }) => {
    if (!isVisible) return null;

    let className = ""
    if (type === "success") className = "banner-success"
    else if (type === "error") className = "banner-error"
    else if (type === "info") className = "banner-info"

    return <div className={className}>{message}</div>
}

export default NotificationBanner;