import React from 'react';

//front UI
import {Container, AppBar, Typography, Grow, Grid, Toolbar} from '@material-ui/core';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import useStyles from './style';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// route
import { useHistory } from 'react-router-dom';

const UserInfo = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Container maxidth="lg" >
             <AppBar position="static" color="inherit">
                <Toolbar>

                    <IconButton edge="start" className={classes.startIconButton} color="inherit" aria-label="lastest"
                        onClick={() => {history.push("/");}}>
                        <StarBorderIcon fontSize="large"/>
                    </IconButton>

                    <IconButton edge="start" className={classes.startIconButton} color="inherit" aria-label="courses"
                        onClick={() => {history.push("/course");}}>
                        <MenuBookIcon fontSize="large"/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        User Profile
                    </Typography>

                    <IconButton edge="end" color="inherit" aria-label="profile"
                        onClick={() => {history.push("/userprofile");}}>
                        <AccountCircleIcon fontSize="large"/>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Grow in>
                <Container className={classes.content}>
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