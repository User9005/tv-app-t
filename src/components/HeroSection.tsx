import { PlayIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getMovieTime } from "../lib/getMovieTime";
import { getReleaseYear } from "../lib/getReleaseYear";
import type { MovieType } from "../types";
import { assets } from "../assets/assets";
import { useEffect } from "react";
import { getMovieTitle } from "../lib/getMovieTitle";
import CategorySection from "./CategorySection";
import Player from "./Player";

type HeroSectionProps = {
    movie: MovieType | null;
    showMovie: boolean;
    closeMovie: () => void;
    playMovie: () => void;
    categoryTitle: string;
    categoryMovies: MovieType[];
    onChange: (movie: MovieType) => void;
    visibleItems: number;
    isLandscapeMobile: boolean
};

const HeroSection = ({
    movie,
    showMovie,
    closeMovie,
    playMovie,
    categoryTitle,
    categoryMovies,
    onChange,
    visibleItems,
    isLandscapeMobile
}: HeroSectionProps) => {
    if (!movie) return null;

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = showMovie ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMovie]);

    if (showMovie && !movie.VideoUrl) {
        return <div>No video available</div>;
    }

    if (showMovie && movie.VideoUrl) {
        return  <Player movie={movie} closeMovie={closeMovie} />
    }

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-start bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: movie.Backdrop_path
                    ? `url(${movie.Backdrop_path})`
                    : 'url("/FeaturedCoverImage.png")',
            }}>
 
             {/* Mask as an effect & to make text more readable   */}
            <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#0C0C0C] to-transparent opacity-40" />

            <div 

            // className={`hero-body px-4 sm:px-[90px] md:px-24 
            // ${isLandscapeMobile ? "" : "pt-[100px] md:pt-[130px] lg:pt-[168px]"}
            // `}


            className={`hero-body px-4 sm:px-[90px] md:px-24 pt-[100px] md:pt-[130px] lg:pt-[168px]
            ${isLandscapeMobile ? "-mt-20" : "" }
            `}


            >

                <h1 className="movie-category">{movie.Category}</h1>

                {movie.Id === 986056 ? (
                    <img
                        src={assets.FeaturedTitleImage}
                        alt={movie.Title}
                        className="max-h-11 lg:h-11"
                    />
                ) : (
                    <h1 className="movie-title">{getMovieTitle(movie.Title)}</h1>
                )}

                <div className="movie-meta">
                    <span>{getReleaseYear(movie.ReleaseYear)}</span>
                    <span>{movie.MpaRating}</span>
                    <span>{getMovieTime(movie.Duration)}</span>
                </div>

                <p className="movie-description">{movie.Description.slice(0, 150)}...</p>

                {/* Buttons */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => playMovie()}
                        className="button-base button-primary flex items-center"
                    >
                        <PlayIcon className="play-icon" /> Play
                    </button>

                    <button
                        onClick={() => navigate(`movies/${movie._Id}`)}
                        className="button-base button-secondary"
                    >
                        More Info
                    </button>
                </div>

                <CategorySection
                    categoryTitle={categoryTitle}
                    categoryMovies={categoryMovies}
                    onChange={onChange}
                    visibleItems={visibleItems}
                    isLandscapeMobile={isLandscapeMobile}
                />
            </div>

        </section >
    );
};

export default HeroSection;

