import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/fce99e2707212729ff1b70c9d1d9b1a7~c5_300x300.webp?x-expires=1678201200&x-signature=n2p7YRLOPb%2FvOVOx3YSY8iR912g%3D"
                alt="Bac"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Hoang Viet Bac</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('usename')}>hoangvietbac</span>
            </div>
        </div>
    );
}

export default AccountItem;
