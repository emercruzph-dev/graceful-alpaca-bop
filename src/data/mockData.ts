export interface Showtime {
  time: string;
  type: string; // e.g., "2D", "3D", "IMAX"
}

export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  genre: string[];
  rating: string; // e.g., "PG", "R-13"
  duration: string; // e.g., "2h 15m"
}

export interface Cinema {
  id: string;
  name: string;
  city: string; // e.g., "Pasay", "Makati", "Quezon City"
  mall: string; // e.g., "SM Mall of Asia", "Ayala Center"
}

export interface CinemaMovie {
  cinemaId: string;
  movieId: string;
  showtimes: Showtime[];
}

export const mockMovies: Movie[] = [
  {
    id: "movie1",
    title: "The Grand Adventure",
    posterUrl: "https://image.tmdb.org/t/p/w500/qWnJzyZgQZJ1Z1Z1Z1Z1Z1Z1Z1Z.jpg",
    genre: ["Action", "Adventure"],
    rating: "PG",
    duration: "2h 15m",
  },
  {
    id: "movie2",
    title: "Mystery of the Old House",
    posterUrl: "https://image.tmdb.org/t/p/w500/rMvYt1ZgQZJ1Z1Z1Z1Z1Z1Z1Z1Z.jpg",
    genre: ["Mystery", "Thriller"],
    rating: "R-13",
    duration: "1h 50m",
  },
  {
    id: "movie3",
    title: "Love in the City",
    posterUrl: "https://image.tmdb.org/t/p/w500/sWnJzyZgQZJ1Z1Z1Z1Z1Z1Z1Z1Z.jpg",
    genre: ["Romance", "Drama"],
    rating: "PG-13",
    duration: "2h 0m",
  },
  {
    id: "movie4",
    title: "Space Odyssey",
    posterUrl: "https://image.tmdb.org/t/p/w500/tWnJzyZgQZJ1Z1Z1Z1Z1Z1Z1Z1Z.jpg",
    genre: ["Sci-Fi", "Adventure"],
    rating: "G",
    duration: "2h 30m",
  },
  {
    id: "movie5",
    title: "The Last Stand",
    posterUrl: "https://image.tmdb.org/t/p/w500/uWnJzyZgQZJ1Z1Z1Z1Z1Z1Z1Z1Z.jpg",
    genre: ["Action"],
    rating: "R-16",
    duration: "1h 40m",
  },
];

export const mockCinemas: Cinema[] = [
  { id: "sm-moa", name: "SM Mall of Asia", city: "Pasay", mall: "SM Mall of Asia" },
  { id: "ayala-makati", name: "Ayala Malls Glorietta", city: "Makati", mall: "Ayala Center" },
  { id: "sm-north-edsa", name: "SM North EDSA", city: "Quezon City", mall: "SM North EDSA" },
  { id: "shangri-la", name: "Shangri-La Plaza", city: "Mandaluyong", mall: "Shangri-La Plaza" },
  { id: "bgc-uptown", name: "Uptown Mall Cinemas", city: "Taguig", mall: "BGC Cinemas" },
  { id: "bgc-central", name: "Central Square Cinemas", city: "Taguig", mall: "BGC Cinemas" },
  { id: "robinsons-ermita", name: "Robinsons Place Manila", city: "Manila", mall: "Robinsons Place" },
  { id: "megamall", name: "SM Megamall", city: "Mandaluyong", mall: "SM Megamall" },
];

export const mockCinemaMovies: CinemaMovie[] = [
  {
    cinemaId: "sm-moa",
    movieId: "movie1",
    showtimes: [
      { time: "10:00 AM", type: "2D" },
      { time: "01:00 PM", type: "2D" },
      { time: "04:00 PM", type: "IMAX" },
      { time: "07:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "sm-moa",
    movieId: "movie2",
    showtimes: [
      { time: "11:30 AM", type: "2D" },
      { time: "02:30 PM", type: "2D" },
      { time: "05:30 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "ayala-makati",
    movieId: "movie1",
    showtimes: [
      { time: "10:30 AM", type: "2D" },
      { time: "01:30 PM", type: "2D" },
      { time: "04:30 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "ayala-makati",
    movieId: "movie3",
    showtimes: [
      { time: "11:00 AM", type: "2D" },
      { time: "02:00 PM", type: "2D" },
      { time: "05:00 PM", type: "2D" },
      { time: "08:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "sm-north-edsa",
    movieId: "movie4",
    showtimes: [
      { time: "10:00 AM", type: "IMAX" },
      { time: "01:00 PM", type: "2D" },
      { time: "04:00 PM", type: "2D" },
      { time: "07:00 PM", type: "IMAX" },
    ],
  },
  {
    cinemaId: "sm-north-edsa",
    movieId: "movie5",
    showtimes: [
      { time: "11:00 AM", type: "2D" },
      { time: "02:00 PM", type: "2D" },
      { time: "05:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "shangri-la",
    movieId: "movie2",
    showtimes: [
      { time: "10:00 AM", type: "2D" },
      { time: "01:00 PM", type: "2D" },
      { time: "04:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "shangri-la",
    movieId: "movie3",
    showtimes: [
      { time: "11:00 AM", type: "2D" },
      { time: "02:00 PM", type: "2D" },
      { time: "05:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "bgc-uptown",
    movieId: "movie1",
    showtimes: [
      { time: "10:00 AM", type: "2D" },
      { time: "01:00 PM", type: "2D" },
      { time: "04:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "bgc-uptown",
    movieId: "movie4",
    showtimes: [
      { time: "11:00 AM", type: "2D" },
      { time: "02:00 PM", type: "2D" },
      { time: "05:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "bgc-central",
    movieId: "movie2",
    showtimes: [
      { time: "10:30 AM", type: "2D" },
      { time: "01:30 PM", type: "2D" },
      { time: "04:30 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "robinsons-ermita",
    movieId: "movie5",
    showtimes: [
      { time: "10:00 AM", type: "2D" },
      { time: "01:00 PM", type: "2D" },
      { time: "04:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "megamall",
    movieId: "movie1",
    showtimes: [
      { time: "10:00 AM", type: "2D" },
      { time: "01:00 PM", type: "2D" },
      { time: "04:00 PM", type: "IMAX" },
      { time: "07:00 PM", type: "2D" },
    ],
  },
  {
    cinemaId: "megamall",
    movieId: "movie3",
    showtimes: [
      { time: "11:30 AM", type: "2D" },
      { time: "02:30 PM", type: "2D" },
      { time: "05:30 PM", type: "2D" },
    ],
  },
];