import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchForm from "./SearchForm";
import DrawerTemplate from "./Drawer";
import LoginModal from "./LoginModal";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const isLoggedLocal = localStorage.getItem("isLogged");
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("로그아웃 되었습니다.");

    localStorage.clear();
    navigate("/");
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ position: "sticky", top: 0, zIndex: 999 }}
    >
      <AppBar position="static">
        <Toolbar>
          <DrawerTemplate>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              style={{
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>
          </DrawerTemplate>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              display: "flex",
              alignContent: "bottom",
              color: "white",
              fontSize: "27px",
              fontFamily: "Righteous",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              StageMIX
            </Link>
          </Typography>
          <SearchForm />
          {!isLoggedLocal ? (
            <LoginModal>
              <Button color="inherit">
                <span style={{ color: "white" }}>Login</span>
              </Button>
            </LoginModal>
          ) : (
            <Button
              color="inherit"
              onClick={handleLogout}
              style={{ color: "white" }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}