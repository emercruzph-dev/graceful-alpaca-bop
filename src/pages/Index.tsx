import React, { useState, useMemo } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { mockCinemas, mockMovies, mockCinemaMovies, Cinema, Movie, Showtime } from "@/data/mockData";
import MovieCard from "@/components/MovieCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MovieWithShowtimes extends Movie {
  showtimes: Showtime[];
}

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedMall, setSelectedMall] = useState<string>("All");
  const [selectedCinemaId, setSelectedCinemaId] = useState<string | null>(null);

  const uniqueCities = useMemo(() => {
    const cities = new Set(mockCinemas.map((c) => c.city));
    return ["All", ...Array.from(cities)].sort();
  }, []);

  const uniqueMalls = useMemo(() => {
    const malls = new Set(mockCinemas.map((c) => c.mall));
    return ["All", ...Array.from(malls)].sort();
  }, []);

  const filteredCinemas = useMemo(() => {
    return mockCinemas.filter((cinema) => {
      const cityMatch = selectedCity === "All" || cinema.city === selectedCity;
      const mallMatch = selectedMall === "All" || cinema.mall === selectedMall;
      return cityMatch && mallMatch;
    });
  }, [selectedCity, selectedMall]);

  const displayedMovies = useMemo(() => {
    if (!selectedCinemaId) {
      return [];
    }

    const cinemaMovies = mockCinemaMovies.filter(
      (cm) => cm.cinemaId === selectedCinemaId,
    );

    return cinemaMovies
      .map((cm) => {
        const movie = mockMovies.find((m) => m.id === cm.movieId);
        if (movie) {
          return { ...movie, showtimes: cm.showtimes };
        }
        return null;
      })
      .filter(Boolean) as MovieWithShowtimes[];
  }, [selectedCinemaId]);

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    setSelectedMall("All"); // Reset mall when city changes
    setSelectedCinemaId(null); // Reset cinema when city changes
  };

  const handleMallChange = (value: string) => {
    setSelectedMall(value);
    setSelectedCinemaId(null); // Reset cinema when mall changes
  };

  const handleCinemaChange = (value: string) => {
    setSelectedCinemaId(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-primary dark:text-primary-foreground">
          Metro Manila Movie Guide
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <Select onValueChange={handleCityChange} value={selectedCity}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {uniqueCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city === "All" ? "All Cities" : city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={handleMallChange} value={selectedMall}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Mall" />
            </SelectTrigger>
            <SelectContent>
              {uniqueMalls.map((mall) => (
                <SelectItem key={mall} value={mall}>
                  {mall === "All" ? "All Malls" : mall}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={handleCinemaChange} value={selectedCinemaId || ""}>
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select Cinema" />
            </SelectTrigger>
            <SelectContent>
              {filteredCinemas.length > 0 ? (
                filteredCinemas.map((cinema) => (
                  <SelectItem key={cinema.id} value={cinema.id}>
                    {cinema.name} ({cinema.mall})
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="no-cinemas" disabled>
                  No cinemas available
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {selectedCinemaId && displayedMovies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} showtimes={movie.showtimes} />
            ))}
          </div>
        )}

        {selectedCinemaId && displayedMovies.length === 0 && (
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            No movies showing at this cinema.
          </p>
        )}

        {!selectedCinemaId && (
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            Please select a cinema to see now showing movies.
          </p>
        )}
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;