import * as React from 'react';

import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import MainModal from "./MainModal";
import { GetVideoListAPI } from '../apis/GetVideoListAPI';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MainThumbNail({ title }) {

  const [list, setList] = React.useState([]);

  React.useEffect(()=>{
      GetVideoListAPI(setList)
  },[])
  console.log(list);

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          display: "flex",
        }}
      >
        <Container
          sx={{
            marginLeft: 0,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="left"
            color="text.primary"
            gutterBottom
          >
            {title}
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 2 }} maxWidth="lx">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {list.map((item,index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MainModal videoId = {item.videoId}/>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column-reverse",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 15,
                    }}
                  >
                    made by @{item.userName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
