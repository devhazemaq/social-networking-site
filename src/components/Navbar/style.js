import { Box, Toolbar, styled } from "@mui/material";


export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});


export const StyledSearch = styled("div")(({ theme }) =>({
  backgroundColor: "white",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px",
  position: "relative",
  
  
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: 0,
}));

export const IconB = styled(Box)(({theme})=>({
  display: "none",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

export const UserBox = styled(Box)(({ theme })=>({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]:{
    display: 'none',
  }

}));