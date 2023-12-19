import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import 'boxicons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo-box')}>
                    <img src={images.logo.default} alt="logo" />
                </div>
                <div className={cx('search-box')}>
                    <input type="text" placeholder="Search" spellCheck={false} />
                    <button>
                        <box-icon name="search" color="#333"></box-icon>
                    </button>
                </div>
                <div className={cx('login-box')}>
                    <button className={cx('btn', 'upload-btn')}>
                        <box-icon name="plus"></box-icon> Upload
                    </button>
                    <button className={cx('btn', 'login-btn')}>Log in</button>
                    <div className={cx('icon')}>
                        <box-icon name="devices"></box-icon>
                    </div>

                    <div className={cx('icon')}>
                        <box-icon name="dots-vertical-rounded"></box-icon>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
