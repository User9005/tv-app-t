import { useState, useRef, useLayoutEffect } from 'react';
import type { MovieType } from '../types';

const CategorySection = ({
    categoryTitle,
    categoryMovies,
    onChange,
    visibleItems
    } : {
    categoryTitle: string;
    categoryMovies: MovieType[];
    onChange: (movie: MovieType) => void;
    visibleItems: number
}) => {

    const [cardwidth, setCardWidth] = useState<number>(200);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                const container = carouselRef.current;

                const style = window.getComputedStyle(container);
                const paddingLeft = parseFloat(style.paddingLeft || '0');
                const paddingRight = parseFloat(style.paddingRight || '0');
                const gap = 8;

                const totalGap = gap * (visibleItems - 1);
                const totalWidth = container.clientWidth - paddingLeft - paddingRight - totalGap;

                setCardWidth(totalWidth / visibleItems);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Call initially

        return () => window.removeEventListener("resize", handleResize);
    }, [visibleItems]);

    return (
        <div 
     className="relative z-20 px-4 md:px-12 lg:px-24 sm:mt-[-300px] md:mt[200px] w-full" >
            <h1 className="text-secondary sm:text-2xl md:text-3xl text-[32px] font-semibold mb-4 max-sm:text-center
        max-sm:mt-10 max-md:mx-4 relative z-20"

        >{categoryTitle}</h1>

            <div
                ref={carouselRef}
                className="flex flex-col ms:flex-row gap-4 no-scrollbar  max-sm:justify-center sm:flex-row items-center
          overflow-x-scroll scroll-smooth w-full"
                style={{ scrollbarWidth: 'none' }}
            >
                {categoryMovies.slice(0,50).map((movie) => (
                    <div
                        key={movie.Id}
                        style={{minWidth: String(cardwidth) + "px"}}
                        className={`h-auto max-sm:w-[50vw] cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:brightness-110`}
                        onClick={() => {onChange(movie); scrollTo(0,0);}}
                    >
                        <img
                            src={movie.Poster_path}
                            alt={movie.Title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;













