import React from 'react';

// route
import { useHistory } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { resetCourseId } from '../../actions/currentCourse';
import { resetBulletinId } from '../../actions/currentBulletin';

//front UI
import {Container, AppBar, Typography, Grow, Grid, Toolbar} from '@material-ui/core';
import BulletinForm from '../../components/Bulletins/BulletinForm/BulletinForm';
import BulletinList from '../../components/Bulletins/BulletinList/BulletinList';
import useStyles from './style';

// icons
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Bulletin = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <Container maxidth="lg" >
             <AppBar position="static" color="inherit">
                <Toolbar>

                    <IconButton edge="start" className={classes.startIconButton} color="inherit" aria-label="lastest"
                        onClick={() => {dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/");}}>
                        <StarBorderIcon fontSize="large"/>
                    </IconButton>

                    <IconButton edge="start" className={classes.startIconButton} color="inherit" aria-label="courses"
                        onClick={() => {dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/course");}}>
                        <MenuBookIcon fontSize="large"/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Course Posts
                    </Typography>

                    <IconButton edge="end" color="inherit" aria-label="profile"
                        onClick={() => {dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/userprofile");}}>
                        <AccountCircleIcon fontSize="large"/>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Grow in>
                <Container className={classes.content}>
                    <Grid container alignItems="stretch" direction="column" spacing={3} justify="center">
                        <Grid item xs={12}>
                            <BulletinForm/>
                        </Grid>

                        <Grid item xs={12}>
                            <BulletinList/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default Bulletin;