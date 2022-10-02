import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function FileUploadModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            파일 업로드
          </Typography>
          <Divider style={{marginBottom:'20px'}}/>
          <Stack spacing={2}>
            
          </Stack>
          
        </Box>
      </Modal>
    </div>
  );
}
