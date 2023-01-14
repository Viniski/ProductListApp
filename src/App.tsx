import * as React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import { updateStore } from "./redux/productsSlice";
import ActiveFilter from "./components/Filter/ActiveFilter/ActiveFilter";
import Searchbar from "./components/Filter/Searchbar/Searchbar";
import ProductList from "./components/ProductsList/ProductList";
import { Box } from "@mui/system";

function App() {
  interface IUser {
    name: number | string;
  }
  const [value, setValue] = useState<IUser>({ name: "" });
  const [filterID, setFilterID] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const hanldeChange = (value: string) => {
    const number = Number(value);
    if (Number.isNaN(number)) return;
    if (number === 0) {
      setValue({ name: "" });
      return;
    }
    setValue({ name: number });
  };

  const onKeyDownHandler = (e: { key: string }) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = () => {
    if (value.name === "") return;
    navigate(`/products?id=${value.name}`);
    dispatch(updateStore(`?id=${value.name}`));
    setFilterID(`${value.name}`);
  };

  const deleteFilter = () => {
    navigate(`/products?per_page=5&page=1`);
    dispatch(updateStore(`?per_page=5&page=1`));
    setFilterID("");
  };

  return (
    <div>
      <Box>
        <Searchbar
          value={value.name}
          onChange={hanldeChange}
          onClick={search}
          onKeyDown={onKeyDownHandler}
        />
        <ActiveFilter onClick={deleteFilter} value={filterID} />
        <Routes>
          <Route path="*" element={<ProductList />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
