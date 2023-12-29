import './Banner.scss';
import React from "react";
import clsx from "clsx";

type BannerBaseProps = {
    children?: React.ReactNode;
    type?: 'info' | 'warning' | 'error' | 'success'
    size?: 'small' | 'medium' | 'large'
    onClose?: () => void
    className?: string
    dismissKey?: string

}
export function Banner({children, type, size, onClose, className, dismissKey = ''}: BannerBaseProps): JSX.Element {
    return (
        <div className={clsx(
            'Banner',
            `Banner--${type}`,
            `Banner--${size}`,
            className
            )}
        onClick={onClose}>
            <div className="Banner">{children}</div>
        </div>
    );
}