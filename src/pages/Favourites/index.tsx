import { useAtomValue } from 'jotai';
import { ViewWrapper } from '../styles';
import { favouritesAtom } from '../../atoms/favouritesAtom';
import FavouriteTile from './FavouriteTile';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Favourites = () => {
  const favourites = useAtomValue(favouritesAtom);

  return (
    <ViewWrapper>
      {favourites.map((el) => (
        <FavouriteTile key={el.imdbID} favouriteMovie={el} />
      ))}

      {favourites.length < 1 && (
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', m: 5 }}
        >
          <Typography>Looks really empty over here..</Typography>
          <Typography>
            Maybe try adding something to your favourites?
          </Typography>
        </Box>
      )}
    </ViewWrapper>
  );
};

export default Favourites;
