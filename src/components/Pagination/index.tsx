import Pagination from '@mui/material/Pagination';

type Props = {
  pagesAmount: number;
  page: number;
  onPageChange: (page: number) => void;
};

const PaginationButtons = ({ pagesAmount, page, onPageChange }: Props) => {
  return (
    <Pagination
      count={pagesAmount}
      page={page}
      variant='outlined'
      shape='rounded'
      color='primary'
      size='large'
      onChange={(_event, page) => onPageChange(page)}
    />
  );
};

export default PaginationButtons;
