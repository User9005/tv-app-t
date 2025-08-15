import { useMemo } from "react";
import type { MovieType } from "../types";

const useCategorySort = (categoryMovies: MovieType[], selectedMovieIds: number[] = []) => {
    const sortedMovies = useMemo(() => {
        const sorted: MovieType[] = [];

        for (const id of selectedMovieIds) {
            const movie = categoryMovies.find(m => m.Id === id);
            if (movie) {
                sorted.push(movie);
            }
        }

        const remaining = categoryMovies.filter(movie => !selectedMovieIds.includes(movie.Id));

        return [...sorted, ...remaining];
    }, [categoryMovies, selectedMovieIds]);

    return { movies: sortedMovies };
};

export default useCategorySort;
