import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/Component/Button';
const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button
            className={cx('menu-item')}
            text
            leftIcon={data.icon}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
