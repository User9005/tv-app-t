import { useState, useRef, useLayoutEffect } from 'react';
import type { MovieType } from '../types';

const CategorySection = ({
    categoryTitle,
    categoryMovies,
    onChange,
    visibleItems
}: {
    categoryTitle: string;
    categoryMovies: MovieType[];
    onChange: (movie: MovieType) => void;
    visibleItems: number
}) => {

    const [cardSize, setCardSize] = useState<{ width: number; height: number }>({
        width: 200,
        height: 120,
    });
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const isMobile:boolean = window.innerWidth <= 640;


    useLayoutEffect(() => {
        if(isMobile) {
            getcardSize()
        } 

        const handleResize = () => {
            if (carouselRef.current) {
                const container = carouselRef.current;

                const style = window.getComputedStyle(container);
                const paddingLeft = parseFloat(style.paddingLeft || '0');
                const paddingRight = parseFloat(style.paddingRight || '0');
                const gap = 8;

                const totalGap = gap * (visibleItems - 1);
                const totalWidth = container.clientWidth - paddingLeft - paddingRight - totalGap;

                setCardSize(prevSize => ({
                    ...prevSize,
                    width: totalWidth / visibleItems
                }));
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Call initially

        return () => window.removeEventListener("resize", handleResize);
    }, [visibleItems]);



    const getcardSize = () => {
        const isMobile = window.innerWidth <= 640;
        if (isMobile) {
            setCardSize(prevSize => ({
                ...prevSize,
                width: window.innerWidth * 0.4
            }));
        }
        // return window.innerWidth / visibleItems; // default behavior
    };

    // useLayoutEffect(() => {
    //     getcardSize();
    // }, [])


    //   useEffect(() => {
    //     const handleResize = () => {
    //         setCardSize(prevSize => ({
    //             ...prevSize,
    //             width: getcardSize()
    //         }) );
    //     };
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);

    return (
        <div className={`relative z-20 w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20 ${categoryTitle === "Trending Now" ? "max-sm:mt-20 sm:mt-90 md:mt-60 lg:pb-10" : ""}`} >
            <h1 className="text-secondary sm:text-2xl md:text-3xl text-[32px] font-semibold mb-4  max-sm:text-xl max-sm:my-10 relative">
                {categoryTitle}</h1>

            <div ref={carouselRef}
                className="flex gap-4 no-scrollbar items-center
                overflow-x-scroll scroll-smooth w-full"
                style={{ scrollbarWidth: 'none' }}
            >
                {categoryMovies.slice(0, 50).map((movie) => (
                    <div
                        key={movie.Id}
                        style={{ minWidth: String(cardSize.width) + "px" }}
                        className={`h-auto max-sm:rounded-lg rounded-md overflow-hidden max-sm:w-[40vw] cursor-pointer`}
                        onClick={() => { onChange(movie); scrollTo(0, 0); }}
                    >
                        <img
                            src={movie.Poster_path}
                            alt={movie.Title}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;













