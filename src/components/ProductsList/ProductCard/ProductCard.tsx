import { TableCell, TableRow, Box, Typography, Modal } from "@mui/material";
import { useState } from "react";

type ProductCardProps = {
  row: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
};

function ProductCard(props: ProductCardProps) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: props.row.color,
    boxShadow: 24,
    p: 6,
    textAlign: "center",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TableRow
        onClick={handleOpen}
        key={props.row.id}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          bgcolor: props.row.color,
        }}
      >
        <TableCell component="th" scope="row" align="center" width="33.3%">
          {props.row.id}
        </TableCell>
        <TableCell align="center" width="33.3%">
          {props.row.name}
        </TableCell>
        <TableCell align="center" width="33.3%">
          {props.row.year}
        </TableCell>
      </TableRow>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ID: {props.row.id}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name: {props.row.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Year: {props.row.year}
          </Typography>
          <Typography id="modal-modal-description" mt="25px">
            Pantone value: {props.row.pantone_value}
          </Typography>
          <Typography id="modal-modal-description" >
            Color: {props.row.color}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ProductCard;
