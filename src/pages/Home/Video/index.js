import styles from './Video.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Video = ({ avata, name, username, title, song, videoUrl, likes, comments, saves, shares }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={avata} alt={username} />
            </div>
            <div className={cx('main-content')}>
                <div className={cx('info')}>
                    <div className={cx('name')}>
                        <h2>{name}</h2>
                        <span>{username}</span>
                    </div>
                    <p className={cx('title')}>{title}</p>
                    <p className={cx('song')}>{song}</p>
                </div>
                <div className={cx('video-box')}>
                    <div className={cx('video')}>
                        {/* <video width={'100%'} height={'auto'}>
                            <source src={videoSrc} type="video/mp4" />
                        </video> */}

                        <img src={videoUrl} alt={name} />
                    </div>
                    <div className={cx('video-counter')}>
                        <ul className={cx('video-counter-list')}>
                            <li className={cx('video-counter-item')}>
                                <div className={cx('icon')}>
                                    <box-icon type="solid" name="heart"></box-icon>
                                </div>
                                <span>{likes}</span>
                            </li>
                            <li className={cx('video-counter-item')}>
                                <div className={cx('icon')}>
                                    <box-icon name="message-rounded-dots" type="solid"></box-icon>
                                </div>
                                <span>{comments}</span>
                            </li>
                            <li className={cx('video-counter-item')}>
                                <div className={cx('icon')}>
                                    <box-icon type="solid" name="cloud-download"></box-icon>
                                </div>
                                <span>{saves}</span>
                            </li>
                            <li className={cx('video-counter-item')}>
                                <div className={cx('icon')}>
                                    <box-icon name="share" type="solid" flip="horizontal"></box-icon>
                                </div>
                                <span>{shares}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className={cx('follow-btn')}>Follow</button>
        </div>
    );
};

export default Video;
