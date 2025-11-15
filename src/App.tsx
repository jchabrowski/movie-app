import './App.css';
import MovieTile, { type MovieProps } from './components/MovieTile';
import SearchBar from './components/SearchBar';

const MOVIE_ARR = Array.from({ length: 9 }).fill({
  name: 'Interstellar',
  year: 2024,
  poster:
    'https://m.media-amazon.com/images/M/MV5BZWMzZDUzZmQtM2VjMy00YTMzLWE5YTktZmIzMTljNDc3MWQ1XkEyXkFqcGc@._V1_SX300.jpg',

  plot: 'A corrupt police detective has a painful moral awakening and decides to put right 20 years of wrongdoing.',
  genre: 'Thriller / Drama',
  imdbRating: '6.5',
}) as MovieProps[];

function App() {
  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SearchBar />

      {MOVIE_ARR.map((el) => {
        return (
          <MovieTile
            name={el.name}
            poster={el.poster}
            year={el.year}
            plot={el.plot}
            genre={el.genre}
            imdbRating={el.imdbRating}
          />
        );
      })}
    </div>
  );
}

export default App;
