import * as React from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { updateStore } from "../../redux/productsSlice";
import ProductCard from "./ProductCard/ProductCard";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  AlertTitle
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

function ProductList() {
  const { value, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function useQuery(params: string) {
    const { search } = useLocation();
    let query = React.useMemo(() => new URLSearchParams(search), [search]);
    return Number(query.get(params)) || 1;
  }

  const [page, setPage] = React.useState(useQuery("page"));

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/products?per_page=5&page=${value}`);
    dispatch(updateStore(`?per_page=5&page=${value}`));
    setPage(value);
  };

  useEffect(() => {
    navigate(`/products?per_page=5&page=${page}`);
    dispatch(updateStore(`?per_page=5&page=${page}`));
  }, []);

  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        margin="20px 5%"
      >
        {error ? (
          <Alert severity="error">
            <AlertTitle>Wystąpił problem!</AlertTitle>
            Zmień parametry wyszukiwania lub zaczekaj aż strona zacznie działać
            poprawnie
          </Alert>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" width="33.3%">
                      id
                    </TableCell>
                    <TableCell align="center" width="33.3%">
                      name
                    </TableCell>
                    <TableCell align="center" width="33.3%">
                      year
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {value.map((row) => (
                    <ProductCard key={row.id} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="20px auto"
      >
        <Pagination
          count={value.length === 1 ? 1 : 3}
          page={page}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
}

export default ProductList;
