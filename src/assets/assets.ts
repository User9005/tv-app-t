// Icons
import genres from "./icons/genres.png"
import home from "./icons/home.png"
import movies from "./icons/movies.png"
import search from "./icons/search.png"
import shows from "./icons/shows.png"
import watch from "./icons/watch.png"

// Images
import FeaturedCoverImage from "./FeaturedCoverImage.png"
import FeaturedTitleImage from "./FeaturedTitleImage.png"
import specials_1 from "./specials_1.png"
import specials_2 from "./specials_2.png"
import specials_3 from "./specials_3.png"
import specials_4 from "./specials_4.png"
import specials_5 from "./specials_5.png"
import specials_6 from "./specials_6.png"
import specials_7 from "./specials_7.png"
import specials_8 from "./specials_8.png"
import profileImage from "./Sung-Gi-Hoon.png"


export const assets = {
    genres,
    home,
    movies,
    search,
    shows,
    watch,
    FeaturedCoverImage,
    FeaturedTitleImage,
    specials_1,
    specials_2,
    specials_3,
    specials_4,
    specials_5,
    specials_6,
    specials_7,
    specials_8,
    profileImage,
};

export const navLinks = [
    { name: 'Search', path: '/', icon: search},
    { name: 'Home', path: '/', icon: home},
    { name: 'TV Shows', path: '/tv-shows', icon: shows},
    { name: 'Movies', path: '/movies', icon: movies},
    { name: 'Genres', path: '/genres', icon: genres},
    { name: 'Watch Later', path: '/watch-later', icon: watch},
];

export const dummyShowsData = [
    {
        "_Id": "324544",
        "Id": 324544,
        "Title": "In the Lost Lands",
        "Description": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "Poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "ReleaseYear": "2025-02-27",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "She seeks the power to free her people.",
        "Vote_average": 6.4,
        "Vote_count": 15000,
        "Duration": 102,
        "VideoUrl": "https://www.youtube.com/watch?v=umiKiW4En9g"
    },
    {
        "_Id": "1232546",
        "Id": 1232546,
        "Title": "Until Dawn",
        "Description": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
        "Poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "ReleaseYear": "2025-04-23",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Every night a different nightmare.",
        "Vote_average": 6.405,
        "Vote_count": 18000,
        "Duration": 103,
        "VideoUrl": "https://www.youtube.com/watch?v=-sAOWhvheK8"
    },
    {
        "_Id": "552524",
        "Id": 552524,
        "Title": "Lilo & Stitch",
        "Description": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        "Poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "ReleaseYear": "2025-05-17",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Hold on to your coconuts.",
        "Vote_average": 7.117,
        "Vote_count": 27500,
        "Duration": 108,
        "VideoUrl": "https://www.youtube.com/watch?v=1pHDWnXmK7Y"
    },
    {
        "_Id": "668489",
        "Id": 668489,
        "Title": "Havoc",
        "Description": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        "Poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "Genres": [
            { "Id": 28, "name": "Action" },
            { "Id": 80, "name": "Crime" },
            { "Id": 53, "name": "Thriller" }
        ],
        "ReleaseYear": "2025-04-25",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "No law. Only disorder.",
        "Vote_average": 6.537,
        "Vote_count": 35960,
        "Duration": 107,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "950387",
        "Id": 950387,
        "Title": "A Minecraft Movie",
        "Description": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        "Poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "ReleaseYear": "2025-03-31",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Be there and be square.",
        "Vote_average": 6.516,
        "Vote_count": 15225,
        "Duration": 101,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "575265",
        "Id": 575265,
        "Title": "Mission: Impossible - The Final Reckoning",
        "Description": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "Poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "ReleaseYear": "2025-05-17",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Our lives are the sum of our choices.",
        "Vote_average": 7.042,
        "Vote_count": 19885,
        "Duration": 170,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "986056",
        "Id": 986056,
        "Title": "Thunderbolts*",
        "Description": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "Poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "ReleaseYear": "2025-04-30",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Everyone deserves a second shot.",
        "Vote_average": 7.443,
        "Vote_count": 23569,
        "Duration": 127,
        "VideoUrl": 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        "_Id": "32454",
        "Id": 32454,
        "Title": "In the Lost Lands",
        "Description": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "Poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "ReleaseYear": "2025-02-27",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "She seeks the power to free her people.",
        "Vote_average": 6.4,
        "Vote_count": 15000,
        "Duration": 102,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "123254",
        "Id": 123254,
        "Title": "Until Dawn",
        "Description": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
        "Poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "ReleaseYear": "2025-04-23",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Every night a different nightmare.",
        "Vote_average": 6.405,
        "Vote_count": 18000,
        "Duration": 103,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "55252",
        "Id": 55252,
        "Title": "Lilo & Stitch",
        "Description": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        "Poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "ReleaseYear": "2025-05-17",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Hold on to your coconuts.",
        "Vote_average": 7.117,
        "Vote_count": 27500,
        "Duration": 108,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "66848",
        "Id": 66848,
        "Title": "Havoc",
        "Description": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        "Poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "ReleaseYear": "2025-04-25",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "No law. Only disorder.",
        "Vote_average": 6.537,
        "Vote_count": 35960,
        "Duration": 107,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "95038",
        "Id": 95038,
        "Title": "A Minecraft Movie",
        "Description": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        "Poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "ReleaseYear": "2025-03-31",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Be there and be square.",
        "Vote_average": 6.516,
        "Vote_count": 15225,
        "Duration": 101,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "57526",
        "Id": 57526,
        "Title": "Mission: Impossible - The Final Reckoning",
        "Description": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "Poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "ReleaseYear": "2025-05-17",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Our lives are the sum of our choices.",
        "Vote_average": 7.042,
        "Vote_count": 19885,
        "Duration": 170,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    {
        "_Id": "98605",
        "Id": 98605,
        "Title": "Thunderbolts*",
        "Description": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "Poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "ReleaseYear": "2025-04-30",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Everyone deserves a second shot.",
        "Vote_average": 7.443,
        "Vote_count": 23569,
        "Duration": 127,
        "VideoUrl": 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
]


export const moviesData = {
    "Featured": {
        "_Id": "986056",
        "Id": 986056,
        "Title": "The Irishman*",
        "CoverImage": "FeaturedCoverImage.png",
        "TitleImage": "FeaturedTitleImage.png",
        "Description": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "Poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "Backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "ReleaseYear": "2021",
        "Original_language": "en",
        "MpaRating": "18+",
        "Category": "Movie",
        "Tagline": "Everyone deserves a second shot.",
        "Vote_average": 7.443,
        "Vote_count": 23569,
        "Duration": 127,
        "VideoUrl": 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
    "TrendingNow": dummyShowsData
}


