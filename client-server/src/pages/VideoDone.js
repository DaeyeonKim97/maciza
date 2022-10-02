import * as React from "react";
import { AppBar, Box, Button, Container, CssBaseline } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import img from "../Images/AD.gif";
import io from 'socket.io-client';
import queryString from 'query-string'
import axios from "axios";

const socket = io.connect('localhost:3334');

export function VideoDone() {
  
  const [counter, setCounter] = React.useState(0);
  const [isVideo, setIsVideo] = React.useState(false);
  console.log(window.location.search);
  const videoId = queryString.parse(window.location.search).videoId;

  React.useState(()=>{
    if(counter === 0){
      axios.post('http://localhost:3000/videos',{
        videoId : videoId,
      }).then((res)=>{
        counter++;
      })
    }
    return(()=>{
      setCounter(0)
    })
  },[])

  console.log('video done : ',videoId);

  socket.on('task complete',()=>{
    setIsVideo(true);
  })

  return (
    <>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        <Link to="/create">
          <Button
            variant="contained"
            color="secondary"
            sx={{
              position: "fixed",
              marginTop: "20px",
              marginLeft: "20px",
              color: "rgba(100,100,100,1)",
            }}
          >
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
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </Button>
        </Link>
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
              backgroundColor: "rgba(0,0,0,0.1)",
              height: "750px",
              width: "100%",
              borderRadius: "5px",
            }}
          >
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "rgba(120,120,120,1)",
                borderRadius: "2px",
                height: "650px",
              }}
            >
              {isVideo ? (
                <video controls autoPlay width="100%">
                  <source
                    src={"http://172.20.10.9:3000/videos/"+videoId}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <>
                  <div style={{ fontSize: "20px", marginBottom: "20px" }}>
                    처리중입니다..
                  </div>
                  <img src={img} />
                </>
              )}
            </Container>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                marginTop: "20px",
                fontSize: "30px",
              }}
            >
              {isVideo ? (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mb: 2, mr: 2, width: "100px", fontWeight: "700" }}
                    style={{ color: "white" }}
                  >
                    다운로드
                  </Button>
                  <Link to="/">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mb: 2, width: "100px", fontWeight: "700" }}
                      style={{ color: "white" }}
                    >
                      포스팅
                    </Button>
                  </Link>
                </>
              ) : null}
            </Container>
          </Container>
        </Box>
      </main>
    </>
  );
}