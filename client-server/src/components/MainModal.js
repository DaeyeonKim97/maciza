import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const boxStyle = {
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

export default function MainModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} style={{height:"100"}}>
        <img src={"http://localhost:3000/"+props.videoId+".png"} style={{width:"100%"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <video controls autoPlay width="100%">
            {/* <source src="/media/cc0-videos/flower.webm" type="video/webm" /> */}
            <source
              src={"http://localhost:3000/videos/"+props.videoId}
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Box>
      </Modal>
    </>
  );
}
