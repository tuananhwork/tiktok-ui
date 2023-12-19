import classNames from 'classnames/bind';
// import 'boxicons';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('side-list')}>
                <li className={cx('side-list-item', 'active')}>
                    <box-icon name="home"></box-icon>
                    <h2>For You</h2>
                </li>
                <li className={cx('side-list-item')}>
                    <box-icon name="duplicate"></box-icon>
                    <h2>Following</h2>
                </li>
                <li className={cx('side-list-item')}>
                    <box-icon name="compass"></box-icon>
                    <h2>Explore</h2>
                </li>
                <li className={cx('side-list-item')}>
                    <box-icon name="video-plus"></box-icon>
                    <h2>LIVE</h2>
                </li>
                <li className={cx('side-list-item')}>
                    <box-icon name="user"></box-icon>
                    <h2>Profile</h2>
                </li>
            </ul>
            <p className={cx('side-desc')}>Log in to follow creators, like videos, and view comments.</p>
            <button className={cx('side-login-btn')}>Log in</button>
            <button className={cx('side-creativity-btn')}>Creativity</button>
            <ul className={cx('side-link')}>
                <li className={cx('side-link-item')}>
                    <a href="#">About</a>
                    <a href="#">Newsroom</a>
                    <a href="#">Contact</a>
                    <a href="#">Careers</a>
                </li>
                <li className={cx('side-link-item')}>
                    <a href="#">TikTok for Good</a>
                    <a href="#">Advertise</a>
                    <a href="#">Developers</a>
                    <a href="#">Transparency</a>
                    <a href="#">TikTok Rewards</a>
                    <a href="#">TikTok Embeds</a>
                </li>
                <li className={cx('side-link-item')}>
                    <a href="#">Help</a>
                    <a href="#">Safety</a>
                    <a href="#">Term</a>
                    <a href="#">Privacy</a>
                </li>
                <li className={cx('side-link-item')}>
                    <a href="#">Dance</a>
                    <a href="#">Arts</a>
                    <a href="#">Food and Drink</a>
                    <a href="#">Tourism</a>
                    <a href="#">Production and Manufacturing</a>
                    <a href="#">Vehicles and Transportation</a>
                    <a href="#">Relationship</a>
                    <a href="#">TikTok Style</a>
                    <a href="#">Athletics</a>
                    <a href="#">Hobbies</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
