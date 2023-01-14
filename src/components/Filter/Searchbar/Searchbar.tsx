import { TextField, Grid, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

type SearchbarProps = {
  value: number | string;
  onChange: (value: string) => void;
  onClick: (event: object) => void;
  onKeyDown: (event: { key: string }) => void;
};

function Searchbar(props: SearchbarProps) {
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2} margin="20px 5px">
          <TextField
            onChange={(e) => props.onChange(e.target.value)}
            onKeyDown={(e) => props.onKeyDown(e)}
            value={props.value}
            label={"Tylko liczby"}
            id="tylko-liczby"
            autoFocus
          />
          <LoadingButton
            loading={false}
            variant="contained"
            size="large"
            onClick={props.onClick}
          >
            Filtruj według ID
          </LoadingButton>
        </Stack>
      </Grid>
    </>
  );
}

export default Searchbar;
