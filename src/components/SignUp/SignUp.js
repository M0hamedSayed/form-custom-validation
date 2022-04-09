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
import { handleValidation } from '../../services/validation';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';




export default function SignUp(props) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        passwordConfirm: ''
    });

    const [valuesErr, setValuesErr] = React.useState({
        firstNameErrs: null,
        lastNameErrs: null,
        emailErrs: null,
        userNameErrs: null,
        passwordErrs: null,
        passwordConfirmErrs: null,
    });
    const passEle = React.useRef();
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    }
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setValuesErr({
            ...valuesErr,
            [`${event.target.name}Errs`]: handleValidation(event.target.name, event.target.value, passEle.current.children[1].children[0].value)

        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    };

    const handleDisable = () => {
        const check = (!valuesErr.emailErrs &&
            !valuesErr.passwordErrs &&
            !valuesErr.firstNameErrs &&
            !valuesErr.lastNameErrs &&
            !valuesErr.userNameErrs &&
            !valuesErr.passwordConfirmErrs
        ) ? false : true
        return check;
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={values.firstName}
                                onBlur={handleChange}
                                onInput={handleChange}
                                error={valuesErr.firstNameErrs ? true : false}
                                helperText={valuesErr.firstNameErrs ? valuesErr.firstNameErrs : ''}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                value={values.lastName}
                                onBlur={handleChange}
                                onInput={handleChange}
                                error={valuesErr.lastNameErrs ? true : false}
                                helperText={valuesErr.lastNameErrs ? valuesErr.lastNameErrs : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="Email"
                                label="Email Address"
                                name="email"
                                value={values.email}
                                onBlur={handleChange}
                                onInput={handleChange}
                                error={valuesErr.emailErrs ? true : false}
                                helperText={valuesErr.emailErrs ? valuesErr.emailErrs : ''}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="userName"
                                autoComplete='off'
                                value={values.userName}
                                onBlur={handleChange}
                                onInput={handleChange}
                                error={valuesErr.userNameErrs ? true : false}
                                helperText={valuesErr.userNameErrs ? valuesErr.userNameErrs : ''}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                id="passwordRegister"
                                autoComplete="new-password"
                                type={showPassword ? 'text' : 'password'}
                                ref={passEle}
                                value={values.password}
                                onBlur={handleChange}
                                onInput={handleChange}
                                error={valuesErr.passwordErrs ? true : false}
                                helperText={valuesErr.passwordErrs ? valuesErr.passwordErrs : ''}
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
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="passwordConfirm"
                                label="passwordConfirm"
                                type={showPasswordConfirm ? 'text' : 'password'}
                                id="passwordConfirm"
                                autoComplete="off"
                                value={values.passwordConfirm}
                                onBlur={handleChange}
                                onInput={handleChange}
                                error={valuesErr.passwordConfirmErrs ? true : false}
                                helperText={valuesErr.passwordConfirmErrs ? valuesErr.passwordConfirmErrs : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPasswordConfirm}
                                                edge="end"
                                            >
                                                {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={(!valuesErr.emailErrs &&
                            !valuesErr.passwordErrs &&
                            !valuesErr.firstNameErrs &&
                            !valuesErr.lastNameErrs &&
                            !valuesErr.userNameErrs &&
                            !valuesErr.passwordConfirmErrs &&
                            values.password &&
                            values.email &&
                            values.passwordConfirm &&
                            values.email &&
                            values.firstName &&
                            values.lastName
                        ) ? false : true}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#sighin" onClick={() => props.handlePage('signin')} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container >
    );
}