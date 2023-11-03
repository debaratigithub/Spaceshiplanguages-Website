import { Pagination } from "@mui/material";

type PaginationProps = {
  count: number;
  shape?: "circular" | "rounded";
  color?: "primary" | "secondary";
};

const CommonPagination = ({ count, shape, color }: PaginationProps) => {
  return (
    <Pagination
      sx={paginationStyle}
      color={color}
      count={count}
      shape={shape}
    />
  );
};
const paginationStyle = () => ({
  margin: "4rem auto",
  "& .MuiPaginationItem-page": {
    color: "#000",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
});
export default CommonPagination;
