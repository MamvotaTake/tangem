import React, {ButtonHTMLAttributes} from "react";
import clsx from 'clsx'
import './Button.scss'

type ButtonBaseProps = Pick<
    ButtonHTMLAttributes<HTMLElement>,
    | 'title'
    | 'onClick'
    | 'id'
    | 'tabIndex'
    | 'form'
    | 'onMouseDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onKeyDown'
    | 'role'
    | 'aria-haspopup'
> & {
    children?: React.ReactNode
    type?: 'primary' | 'secondary' | 'tertiary'
    status?: 'primary' | 'danger' | 'primary-alt' | 'muted' | 'stealth'
    className?: string
    size?: 'xsmall' | 'small' | 'medium' | 'large'
    'aria-label'?: string,
    to?: string
}

export const Button: React.FunctionComponent<ButtonBaseProps & React.RefAttributes<HTMLButtonElement>> =
    React.forwardRef(
        (
            {
                children,
                className,
                type="primary",
                status="primary",
                size="small",
                to,
                ...buttonProps
            },
                ref
        ): JSX.Element => {



            return (
                <button
                    ref={ref as any}
                    className={clsx(
                        'Button',

                        `Button--${type}`,
                        `Button--${status}`,
                        `Button--${size}`,
                        className,
                    )}
                    {...buttonProps}
                >
                    {children ? <span className="Button__Content font-medium text-base">{children}</span> : null}
                </button>
            );
        }
    )