import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ChangePasswordAPI } from '../apis/ChangePasswordAPI';
import { Alert, AlertTitle } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        김대연
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function ChangePassword() {

  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = React.useState({
    oldPassword : '', newPassword : ''
  });

  const [passErr, setPassErr] = React.useState(false);

  const onClickHandler = () =>{
    ChangePasswordAPI(values.oldPassword, values.newPassword, setPassErr, navigate);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            비밀번호 변경
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="oldPassword"
                        label="기존 비밀번호"
                        type="password"
                        id="oldPassword"
                        value={values.oldPassword}
                        onChange={handleChange('oldPassword')}
                        autoComplete="new-password"
                    />
                </Grid>
              <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="newPassword"
                        label="신규 비밀번호"
                        type="password"
                        id="newPassword"
                        value={values.newPassword}
                        onChange={handleChange('newPassword')}
                        autoComplete="new-password"
                    />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClickHandler}
              style={{color:"white"}}
            >
              변경
            </Button>
            {passErr ?
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              비밀번호 변경에 실패했습니다. — <strong>기존 비밀번호 확인</strong>
            </Alert>
            : null
            }
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}