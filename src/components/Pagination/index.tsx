import Pagination from '@mui/material/Pagination';
import { useAtom } from 'jotai';
import { pageAtom } from '../../atoms/queryParamsAtom';

type Props = {
  pagesAmount: number;
};

const PaginationButtons = ({ pagesAmount }: Props) => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <Pagination
      count={pagesAmount}
      page={page}
      variant='outlined'
      shape='rounded'
      color='primary'
      size='large'
      onChange={(_event, page) => setPage(page)}
    />
  );
};

export default PaginationButtons;
