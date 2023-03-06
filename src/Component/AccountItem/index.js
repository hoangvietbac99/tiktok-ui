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
                src="https://photos.google.com/photo/AF1QipPhjz1Mcvp_9sRIMNrvY_XdlijTQ3JgfHeaqGfu"
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
