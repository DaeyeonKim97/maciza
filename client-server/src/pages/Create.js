import * as React from "react";
import { AppBar, Box, Button, Container, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

export function Create() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        <Link to="/">
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(120,120,120,1)",
              borderRadius: "2px",
            }}
          >
            영상을 온라인에서 쉽게 교차편집해서 나만의 영상을 만드세요
          </Container>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            교차 편집기
          </Container>
        </Box>
        <Box
          sx={{
            pt: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column-reverse",
              backgroundColor: "rgba(0,0,0,0.8)",
              height: "250px",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              위 버튼을 눌러 파일을 업로드 하세요. 1GB 최대 파일 크기 또는{" "}
              <Link to="/signup" style={{ color: "rgba(255,255,255,1)" }}>
                회원 가입
              </Link>
            </div>
            <Container
              sx={{
                backgroundColor: "#33d9b2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "800px",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <form
                action={
                  "http://localhost:3001/upload/" +
                  localStorage.getItem("userName")
                }
                encType="multipart/form-data"
                method="post"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label for="input-file">
                  <div
                    style={{
                      backgroundColor: "white",
                      textAlign: "center",
                      margin: "0px 10px",
                      width: "250px",
                      padding: "10px 20px",
                      borderRadius: "3px",
                      color: "rgba(0,0,0,1)",
                      fontSize: "17px",
                      fontWeight: "600",
                    }}
                  >
                    업로드
                  </div>
                </label>
                <input
                  type="file"
                  id="input-file"
                  name="attachments"
                  multiple
                  style={{ display: "none" }}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    height: "45px",
                    width: "30px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </Button>
              </form>
            </Container>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgba(120,120,120,0.05)",
              borderRadius: "2px",
              height: "250px",
            }}
          >
            <div
              style={{
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  border: "2px solid #a29bfe",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  color: "#a29bfe",
                }}
              >
                DeepLearing
              </div>
            </div>
            <div
              style={{
                margin: "10px 0",
                color: "rgba(0,0,0,0.7)",
                fontSize: "15px",
              }}
            >
              기계 학습과 데이터 마이닝
            </div>
            <div
              style={{
                margin: "10px 0",
                color: "rgba(0,0,0,0.5)",
                fontSize: "14px",
                width: "700px",
                textAlign: "center",
              }}
            >
              심층 학습(深層學習) 또는 딥 러닝(영어: deep structured learning,
              deep learning 또는 hierarchical learning)은 여러 비선형 변환기법의
              조합을 통해 높은 수준의 추상화(abstractions, 다량의 데이터나
              복잡한 자료들 속에서 핵심적인 내용 또는 기능을 요약하는 작업)를
              시도하는 기계 학습 알고리즘의 집합으로 정의된다.
            </div>
          </Container>
        </Box>
      </main>
    </>
  );
}