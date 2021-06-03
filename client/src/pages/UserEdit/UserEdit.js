import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import { getUsers } from '../../actions/users'

//front UI
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import UserEditForm from '../../components/UserEditForm/UserEditForm';
import useStyles from './style';

const UserEdit = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]); 

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" aligh="center">회원 정보 변경</Typography>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container alignItems="stretch" spacing={3} justify="center">
                        <Grid item xs={6}>
                            <UserEditForm/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default UserEdit;