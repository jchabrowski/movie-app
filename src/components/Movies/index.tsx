import type { MovieOverview } from '../../schemas';
import MovieTile from './MovieTile';

type Props = {
  movies: MovieOverview[];
};

const Movies = ({ movies }: Props) => {
  return movies.map((movie, index) => {
    return (
      <MovieTile
        // Attaching index to Title is necessary here, OMDBApi can return doubled elements
        key={movie.Title + index}
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
