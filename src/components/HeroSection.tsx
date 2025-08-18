import { ArrowLeft, PlayIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getMovieTime } from "../lib/getMovieTime";
import { getReleaseYear } from "../lib/getReleaseYear";
import type { MovieType } from "../types";
import { assets } from "../assets/assets";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { getMovieTitle } from "../lib/getMovieTitle";

const HeroSection = ({
    movie,
    showMovie,
    closeMovie,
    playMovie
}: {
    movie: MovieType | null;
    showMovie: boolean;
    closeMovie:()=>void;
    playMovie: ()=>void;
}) => {

    if (!movie) return null;

    const navigate = useNavigate();
    const moviTitle = getMovieTitle(movie?.Title || "");

    useEffect(() => {
        document.body.style.overflow = showMovie ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMovie]);

    console.log(showMovie);
    

    if (showMovie) {
        if (!movie.VideoUrl) {
            return <div>No video available</div>;
        }

        return (
            <section className="w-full h-screen bg-black">
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
    }

    return (
        <section className="relative w-full h-screen overflow-hidden hero-image">
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none bg-gradient-to-b from-[#0C0C0C] to-transparent opacity-40 z-0" />

            <div className="hero-body z-10 absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: movie.Backdrop_path
                        ? `url(${movie.Backdrop_path})`
                        : 'url("/FeaturedCoverImage.png")',
                }}>
                    
                <h1 className="movie-category">{movie.Category}</h1>

                {movie.Id === 986056 ? (
                    <img
                        src={assets.FeaturedTitleImage}
                        alt={movie.Title}
                        className="max-h-11 lg:h-11"
                    />
                ) : (
                    <h1 className="movie-title">
                        <span className="text-3xl max-sm:text-3xl font-medium">
                            {moviTitle[0]} {" "}
                        </span>
                        {moviTitle.length > 1 &&
                        <span className="text-4xl font-semibold">
                            {moviTitle.slice(1).join(" ")}
                        </span>}
                    </h1>
                )}

                <div className="movie-meta">
                    <span>{getReleaseYear(movie.ReleaseYear)}</span>
                    <span>{movie.MpaRating}</span>
                    <span>{getMovieTime(movie.Duration)}</span>
                </div>

                <p className="movie-description">{movie.Description.slice(0, 150)}...</p>

                {/* Buttons */}
                <div className="flex items-center gap-6 max-sm:flex-col-reverse">
                    <button
                        onClick={() => playMovie()}
                        className="button-base button-primary flex items-center"
                    >
                        <PlayIcon className="max-sm:w-4.5 max-sm:h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7  fill-[#0C0C0C]" /> Play
                    </button>

                    <button
                        onClick={() => navigate(`movies/${movie._Id}`)}
                        className="button-base button-secondary"
                    >
                        More Info
                    </button>
                </div>

            </div>

        </section>
    );
};

export default HeroSection;

