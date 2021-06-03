import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import { getUsers } from '../../actions/users'

//front UI
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import  LoginForm from '../../components/LoginForm/LoginForm';
import useStyles from './style';

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]); 

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" aligh="center">로그인</Typography>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container alignItems="stretch" spacing={3} justify="center">
                        <Grid item xs={5}>
                            <LoginForm/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default Login;