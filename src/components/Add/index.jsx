import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {StyledModal} from "./style"
import { UserBox } from "../Navbar/style";


const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { sm: "calc(50% - 25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
          <Typography color={"gray"} variant="h6" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={"assets/images/hhh.jpg"} />
            <Typography variant="span" fontWeight={500}>
              Hazem
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            rows={3}
            variant="standard"
            placeholder="What's on your mind"
          />
          <Stack spacing={2} direction="row">
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            sx={{ marginTop: 1 }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
