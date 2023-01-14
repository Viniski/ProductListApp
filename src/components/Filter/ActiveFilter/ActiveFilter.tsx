import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid/Grid";

type ActiveFilterProps = {
  value: number | string;
  onClick: (event: object) => void;
};

function ActiveFilter(props: ActiveFilterProps) {
  return (
    <>
      {props.value && (
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Typography id="modal-modal-description" mr="10px">
            Aktywne filtry ID: {props.value}
          </Typography>
          <Button variant="contained" onClick={props.onClick}>
            Usuń filtr
          </Button>
        </Grid>
      )}
    </>
  );
}

export default ActiveFilter;
