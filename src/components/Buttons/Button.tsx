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
    type?: 'primary' | 'secondary' | 'tertiary' | 'icon'
    className?: string
    size?:  'small' | 'medium'
    'aria-label'?: string,
    to?: string
    icon?: React.ReactNode
}

export const Button: React.FunctionComponent<ButtonBaseProps & React.RefAttributes<HTMLButtonElement>> =
    React.forwardRef(
        (
            {
                children,
                className,
                type="primary",
                size="small",
                icon,
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
                        `Button--${size}`,
                        className,
                    )}
                    {...buttonProps}
                >
                    {icon ? <span className="Button__Icon">{icon}</span> : null}
                    {children ? <span className="Button__Content font-medium text-base">{children}</span> : null}
                </button>
            );
        }
    )