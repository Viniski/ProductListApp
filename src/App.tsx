import { Box, Stack } from "@mui/system";
import Searchbar from "./components/Searchbar/Searchbar";
import Pagination from "./components/Pagination/Pagination";
import ProductList from "./components/ProductsList/ProductList";

function App() {
  return (
    <div>
      <Box>
      <Searchbar/>
      <ProductList/>
      <Pagination/>
      </Box>
    </div>
  );
}

export default App;
