import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    outline,
    rounded,
    text,
    small,
    large,
    children,
    leftIcon,
    signIcon,
    plusIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        text,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {plusIcon && <span className={cx('plusIcon')}>{plusIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {signIcon && <span className={cx('signIcon')}>{signIcon}</span>}
        </Comp>
    );
}

export default Button;
