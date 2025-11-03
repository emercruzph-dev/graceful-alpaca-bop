import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Movie, Showtime } from "@/data/mockData";

interface MovieCardProps {
  movie: Movie;
  showtimes: Showtime[];
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, showtimes }) => {
  return (
    <Card className="w-full max-w-xs overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover" />
      <CardHeader className="p-3 pb-2">
        <CardTitle className="text-lg font-semibold truncate">{movie.title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-1">
          {movie.genre.map((g, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {g}
            </Badge>
          ))}
          <Badge variant="outline" className="text-xs border-primary text-primary">
            {movie.rating}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{movie.duration}</p>
        <div className="grid grid-cols-2 gap-2">
          {showtimes.map((st, index) => (
            <Badge key={index} className="justify-center text-xs py-1 px-2">
              {st.time} ({st.type})
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;