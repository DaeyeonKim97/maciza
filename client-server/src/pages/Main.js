import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import MainThumbNail from "../components/MainThumbNail";
import { Box, Container } from "@mui/system";

const createBtn = {
  position: "fixed",
  left: "90%",
  top: "80%",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  color: "white",
};

export function Home() {


  return (
    <>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            교차편집으로 완성되는 당신만의 메타버스
          </Container>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(120,120,120,1)",
              borderRadius: "2px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            서로 다른 시공간에 있는 최애 아이돌 영상을 <br />
            하나의 영상으로 합치고 공유하세요
          </Container>
        </Box>
        <MainThumbNail title="Popular video" />
        <MainThumbNail title="Recent video" />
        <MainThumbNail title="Recommanded" />
        <Link to={localStorage.getItem('isLogged')?"create":"signup"}>
          <Button color="primary" sx={createBtn} variant="contained">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Button>
        </Link>
      </main>
    </>
  );
}
