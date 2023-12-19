import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Video from './Video';

import videoData from '~/database/videoData';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {videoData.map((video, index) => {
                    console.log(video.avata);
                    console.log(video.videoUrl);
                    return (
                        <Video
                            key={index}
                            avata={video.avata}
                            videoUrl={video.videoUrl}
                            name={video.name}
                            username={video.username}
                            title={video.title}
                            song={video.song}
                            likes={video.likes}
                            comments={video.comments}
                            saves={video.saves}
                            shares={video.shares}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
