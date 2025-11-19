import {
  favouritesAtom,
  type FavouriteMovieDetails,
} from '../../atoms/favouritesAtom';
import Typography from '@mui/material/Typography';
import { MediumImg, MovieBox } from '../../components/styles';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useSetAtom } from 'jotai';

type Props = {
  favouriteMovie: FavouriteMovieDetails;
};

const FavouriteTile = ({ favouriteMovie }: Props) => {
  const { Title, Poster, Plot, imdbRating, imdbID } = favouriteMovie;

  const setFavMovies = useSetAtom(favouritesAtom);

  const handleRemoveFav = (clickedId: string) => {
    setFavMovies((favourites) =>
      favourites.filter((el) => el.imdbID !== clickedId)
    );
  };

  return (
    <MovieBox>
      <MediumImg src={Poster} alt={Title} loading='lazy' />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Box>
          <Typography variant='h6' component='h2'>
            {Title}
          </Typography>

          <Typography variant='body2' sx={{ mt: 1 }}>
            {Plot}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <StarIcon /> {imdbRating}/10
          </Box>

          <Button color='error' onClick={() => handleRemoveFav(imdbID)}>
            Remove
          </Button>
        </Box>
      </Box>
    </MovieBox>
  );
};

export default FavouriteTile;
