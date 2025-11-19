import type { MovieSearchResponse } from '../../schemas';
import MovieTile from './MovieTile';

type Props = {
  movies: MovieSearchResponse[];
};

const Movies = ({ movies }: Props) => {
  return movies.map((movie) => {
    return (
      <MovieTile
        key={movie.imdbID}
        Title={movie.Title}
        Poster={movie.Poster}
        Year={movie.Year}
        Type={movie.Type}
        imdbID={movie.imdbID}
      />
    );
  });
};

export default Movies;
