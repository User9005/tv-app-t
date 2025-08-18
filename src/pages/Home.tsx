import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { moviesData } from '../assets/assets'
import type { MovieData, MovieType } from '../types';
import CategorySection from '../components/CategorySection';
import useCategorySort from '../hooks/useCategorySort';
import useDebouncedVisible from '../hooks/useDebouncedVisible';

const Home = () => {
    const [movies] = useState<MovieData>(moviesData);
    const [storedMovieIds] = useState<number[]>(
        JSON.parse(sessionStorage.getItem("selectedMovieIds") || "[]")
    );
    const [clickedMovieId, setClickedMovieId] = useState<number>(
        storedMovieIds.length > 0 ? storedMovieIds[0] : 1232546
    );
    const [showMovie, showMovieNow, hideMovie, triggerDelayedShow] = useDebouncedVisible(false, 2000);

    const trendingMovies = movies.TrendingNow;
    const { movies: sortedTrendingMovies } = useCategorySort(trendingMovies, storedMovieIds);
    const featuredMovie = trendingMovies.find(movie => movie.Id === clickedMovieId) ?? null;
    const visibleItems: number = 8.5;


    function handleMovieSelect(movie: MovieType) {
        const stored = sessionStorage.getItem('selectedMovieIds');
        let selectedMovieIds = stored ? JSON.parse(stored) : [];
        selectedMovieIds = selectedMovieIds.filter((id: number) => id !== movie.Id);
        selectedMovieIds.unshift(movie.Id);
        selectedMovieIds = selectedMovieIds.slice(0, 20);

        sessionStorage.setItem('selectedMovieIds', JSON.stringify(selectedMovieIds));

        setClickedMovieId(movie.Id);

        triggerDelayedShow()
    }

    return (
        <div className='md:pl-[160px] lg:pl-[180px] xl:pl-[200px] className="w-full min-h-screen"'>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60
             via-transparent to-transparent z-0"></div>
            <HeroSection
                movie={featuredMovie}
                showMovie={showMovie}
                closeMovie={hideMovie}
                playMovie={() => showMovieNow()}
            />
            <CategorySection
                categoryTitle="Trending Now"
                categoryMovies={sortedTrendingMovies}
                onChange={handleMovieSelect}
                visibleItems={visibleItems}
            />
        </div>
    );
};

export default Home