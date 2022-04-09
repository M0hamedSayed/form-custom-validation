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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { handleValidation } from '../../services/validation';

export default function SignIn(props) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const [valuesErr, setValuesErr] = React.useState({
        emailErrs: null,
        passwordErrs: null,
    });
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (event) => {

        setValues({ ...values, [event.target.name]: event.target.value });
        setValuesErr({
            ...valuesErr,
            [`${event.target.name}Errs`]: handleValidation(event.target.name, event.target.value)
        });

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!valuesErr.emailErrs && !valuesErr.passwordErrs && values.email && values.password) console.log(values);
        else console.log("values");
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={values.email}
                        onBlur={handleChange}
                        onInput={handleChange}
                        error={valuesErr.emailErrs ? true : false}
                        helperText={valuesErr.emailErrs ? valuesErr.emailErrs : ''}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        onBlur={handleChange}
                        onInput={handleChange}
                        error={valuesErr.passwordErrs ? true : false}
                        helperText={valuesErr.passwordErrs ? valuesErr.passwordErrs : ''}
                        autoComplete="current-password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={(
                            !valuesErr.emailErrs &&
                            !valuesErr.passwordErrs &&
                            values.email &&
                            values.password
                        ) ? false : true}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>

                        </Grid>
                        <Grid item>
                            <Link href='#signup' onClick={() => props.handlePage('signup')} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
