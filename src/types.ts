export type NavLink = {
    name: string;
    path: string;
    icon: string;
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export type MovieType = {
    _Id: string | number;
    Id: number;
    Title: string;
    CoverImage?: string;
    TitleImage?: string;
    Description: string;
    Poster_path: string;
    Backdrop_path: string;
    ReleaseYear: string;
    Original_language: string;
    MpaRating: string;
    Category: string;
    Tagline: string;
    Vote_average: number;
    Vote_count: number;
    Duration: number;
    VideoUrl: string;
}

export type TrendingNow = MovieType[];

export type MovieData = {
    Featured: MovieType,
    TrendingNow: TrendingNow,
}
