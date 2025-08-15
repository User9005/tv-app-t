import ReactPlayer from 'react-player';
import type { MovieType } from '../types';

const Player = ({movie}:{movie: MovieType}) => {

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <ReactPlayer
                src={movie.VideoUrl}
                style={{ position: 'absolute', top: 0, left: 0 }}
                width="100%"
                height="100%"
                playing={true}
                controls={false}
                loop={true}
            />
        </div>
    );
};

export default Player;
