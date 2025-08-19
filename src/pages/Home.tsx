import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { moviesData } from '../assets/assets'
import type { MovieData, MovieType } from '../types';
import useCategorySort from '../hooks/useCategorySort';

type HomeProps = {
    showMovie: boolean;
    showMovieNow: () => void;
    hideMovie: () => void;
    triggerDelayedShow: () => void;
  };

const Home = (
    {
      showMovie,
      showMovieNow,
      hideMovie,
      triggerDelayedShow
    } :  HomeProps ) => {
    const [movies] = useState<MovieData>(moviesData);
    const [storedMovieIds] = useState<number[]>(
        JSON.parse(sessionStorage.getItem("selectedMovieIds") || "[]")
    );
    const [clickedMovieId, setClickedMovieId] = useState<number>(
        storedMovieIds.length > 0 ? storedMovieIds[0] : 1232546
    );

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
        <div className={`${showMovie ? "pl-0" : "md:pl-[160px] lg:pl-[180px] xl:pl-[200px]"}`}>
            <HeroSection
                movie={featuredMovie}
                showMovie={showMovie}
                closeMovie={hideMovie}
                playMovie={() => showMovieNow()}
                categoryTitle="Trending Now"
                categoryMovies={sortedTrendingMovies}
                onChange={handleMovieSelect}
                visibleItems={visibleItems}
            />
        </div>
    );
};

export default Home