import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faSignIn,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccountItem from '../../../AccountItem';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);
function Header() {
    const [searchReSult, setSearchReSult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchReSult([]);
        }, 1000);
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    interactive
                    visible={searchReSult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button></button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>
                        <FontAwesomeIcon icon={faPlus} />
                        Upload
                    </Button>
                    <Button
                        primary
                        rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                    >
                        Log In
                    </Button>
                    <Button>Log In</Button>
                </div>
            </div>
        </header>
    );
}
export default Header;
