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
    fullWidth? : boolean

}
export function Banner({children, type, size, onClose, className, fullWidth = true}: BannerBaseProps): JSX.Element {

    return (
        <div className={clsx(
            'Banner',
            `Banner--${type}`,
            `Banner--${size}`,
            !fullWidth && "Banner--fullWidth",
            className
            )}
        onClick={onClose}>
            <div className="Banner">{children}</div>
        </div>
    );
}