import React from 'react';

//front UI
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import useStyles from './style';

const UserInfo = () => {
    const classes = useStyles();


    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" aligh="center">프로필</Typography>
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container alignItems="stretch" spacing={3} justify="center">
                        <Grid item xs={6}>
                            <ProfileForm/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default UserInfo;