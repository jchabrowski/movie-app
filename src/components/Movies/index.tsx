import type { MovieOverviewType } from '../../schemas';
import MovieTile from '../MovieTile';

type Props = {
  movies: MovieOverviewType[];
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
      />
    );
  });
};

export default Movies;
