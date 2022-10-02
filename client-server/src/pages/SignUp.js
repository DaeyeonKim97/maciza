import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, AlertTitle } from '@mui/material';
import { SignUpAPI } from '../apis/SignUpAPI';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Published by © '}
      <Link color="inherit" href="/">
        김대연 / 박준호 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {

    console.log('imhere');

  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = React.useState({
    userName: '',
    name: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    email: '',
    showPassword: false,
  });

  const [signUpErr, setSignUpErr] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const onClickHandler = () => {
    SignUpAPI(values, setSignUpErr, navigate);
  }

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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField value={values.userName} onChange={handleChange('userName')}
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="아이디"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={values.name} onChange={handleChange('name')}
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={values.email} onChange={handleChange('email')}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" style={{width:"100%"}}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <ThemeProvider theme>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onClickHandler}
                style={{color:"white"}}
              >
                Sign Up
              </Button>
            </ThemeProvider>
            {signUpErr ?
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              회원 가입에 실패했습니다. — <strong>ID/EMAIL 중복여부 확인</strong>
            </Alert>
            : null
            } 
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LoginModal>
                  <Link>
                  Already have an account? Sign in
                  </Link>
                </LoginModal>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}