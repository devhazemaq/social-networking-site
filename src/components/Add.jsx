import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
// const StyledBox = styled(Box)({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
// });

const avatarPath1 =
  "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
            <Avatar sx={{ width: 30, height: 30 }} src={avatarPath1} />
            <Typography variant="span" fontWeight={500}>
              Jon Doe
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
            <Button>One</Button>
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
