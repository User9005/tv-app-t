import ReactPlayer from 'react-player';
import type { MovieType } from '../types';
import { ArrowLeft } from 'lucide-react';

type PlayerProps = {
    movie: MovieType;
    closeMovie: () => void;
}

const Player = ({ movie, closeMovie } : PlayerProps) => {

    return (
        <section className="relative h-screen bg-black">
            <button
                onClick={() => closeMovie()}
                className="absolute top-4 left-4 z-50 backdrop-blur-md p-2 rounded-full text-white cursor-pointer"
            >
                <ArrowLeft className="w-6 h-6" />
            </button>

            <ReactPlayer
                src={movie.VideoUrl}
                playing={true}
                controls={false}
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
            />
        </section>
    );
};

export default Player;


