import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

type ConfirmDeleteProps = {
  open: boolean;
  disable: boolean;
  onClose: () => void;
  onDelete: () => Promise<void>;
};

function ConfirmDelete({ open, onClose, onDelete }: ConfirmDeleteProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete?</DialogTitle>
      <DialogContent>
        Once you delete this you can't reverse this action.
      </DialogContent>
      <DialogActions>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button onClick={onDelete} variant="outlined">
          Cancel
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDelete;
