import { useState, useRef, useLayoutEffect } from 'react';
import type { MovieType } from '../types';

type CategorySectionProps = {
    categoryTitle: string;
    categoryMovies: MovieType[];
    onChange: (movie: MovieType) => void;
    visibleItems: number
}

const CategorySection = ({
    categoryTitle,
    categoryMovies,
    onChange,
    visibleItems
}: CategorySectionProps) => {

    const [cardSize, setCardSize] = useState<{ width: number; height?: number | string }>({
        width: 200,
        height: 296,
    });
    const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(window.innerWidth <= 768);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const mobileOrTablet = screenWidth <= 768;
            setIsMobileOrTablet(mobileOrTablet); 
          
            if (carouselRef.current) {
              const container = carouselRef.current;
              const style = window.getComputedStyle(container);
              const paddingLeft = parseFloat(style.paddingLeft || '0');
              const paddingRight = parseFloat(style.paddingRight || '0');
              const gap = 8;
          
              if (mobileOrTablet) {
                const mobileOrTabletCardWidth = screenWidth * 0.5;
                const mobileOrTabletCardHeight = mobileOrTabletCardWidth * 9 / 16;
          
                setCardSize({
                  width: mobileOrTabletCardWidth,
                  height: mobileOrTabletCardHeight,
                });
              } else {
                const totalGap = gap * (visibleItems - 1);
                const totalWidth = container.clientWidth - paddingLeft - paddingRight - totalGap;
                const cardWidth = totalWidth / visibleItems;
                const cardHeight = cardWidth * 1.5; 
          
                setCardSize({
                  width: cardWidth,
                  height: cardHeight
                });
              }
            }
          };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, [visibleItems]);


    return (
        <div className={`relative z-20 w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20 ${categoryTitle === "Trending Now" ? "max-sm:mt-15 sm:mt-30 md:mt-60 lg:pb-10" : ""}`} >
            <h1 className="text-secondary sm:text-2xl md:text-3xl text-[32px] font-semibold mb-4  max-sm:text-xl max-sm:my-5 relative">
                {categoryTitle}</h1>

            <div ref={carouselRef}
                className="flex gap-4 no-scrollbar items-center overflow-x-scroll scroll-smooth w-full"
                style={{ scrollbarWidth: 'none' }}
            >
                {categoryMovies.slice(0, 50).map((movie) => {
                    const imgSrc = isMobileOrTablet ? (movie.Backdrop_path || movie.Poster_path) : movie.Poster_path;
                    return ( 
                    <div
                        key={movie.Id}
                        style={{
                            minWidth: `${cardSize.width}px`,
                            height: `${cardSize.height}px`,
                        }}

                        className={`h-auto max-sm:rounded-lg rounded-md overflow-hidden max-sm:w-[40vw] cursor-pointer`}
                        onClick={() => { onChange(movie); scrollTo(0, 0); }}
                    >
                        <img
                            src={imgSrc}
                            alt={movie.Title}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                        />
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CategorySection;




