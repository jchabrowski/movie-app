import { favouritesAtom, type MovieDetails } from '../../atoms/favouritesAtom';
import Typography from '@mui/material/Typography';
import { MediumImg, MovieBox } from '../../components/styles';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useSetAtom } from 'jotai';

const FavouriteTile = ({
  Plot,
  Poster,
  Title,
  imdbRating,
  id,
}: MovieDetails) => {
  const setFavMovies = useSetAtom(favouritesAtom);

  const handleRemoveFav = (clickedId: string) => {
    setFavMovies((favourites) =>
      favourites.filter((el) => el.id !== clickedId)
    );
  };

  return (
    <MovieBox>
      <MediumImg src={Poster} />

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

          <Button color='error' onClick={() => handleRemoveFav(id)}>
            Remove
          </Button>
        </Box>
      </Box>
    </MovieBox>
  );
};

export default FavouriteTile;
