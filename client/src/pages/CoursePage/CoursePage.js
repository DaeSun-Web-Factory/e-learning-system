import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../actions/courses'
import { resetCourseId } from '../../actions/currentCourse';
import { resetBulletinId } from '../../actions/currentBulletin';
import { setMyUser } from '../../actions/myUser';


//constants
import { PROFESSOR } from '../../constants/authorityType';

// route
import { useHistory } from 'react-router-dom';

//front components
import {Container, AppBar, Typography, Grow, Grid, Toolbar} from '@material-ui/core';
import CourseForm from '../../components/Courses/CourseForm/CourseForm';
import CourseList from '../../components/Courses/CourseList/CourseList';
import useStyles from './style';

//icons
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const CoursePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const myUser = useSelector((state) => state.myUser);

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]); 

    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Toolbar>

                    <IconButton edge="start" className={classes.startIconButton} color="inherit" aria-label="lastest"
                        onClick={() => {dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/lastactivity");}}>
                        <StarBorderIcon fontSize="large"/>
                    </IconButton>

                    <IconButton edge="start" className={classes.startIconButton} color="inherit" aria-label="courses"
                        onClick={() => {dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/course");}}>
                        <MenuBookIcon fontSize="large"/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Course Menu
                    </Typography>

                    <IconButton edge="end" color="inherit" aria-label="profile"
                        onClick={() => {dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/userprofile");}}>
                        <AccountCircleIcon fontSize="large"/>
                    </IconButton>

                    <IconButton edge="end" className={classes.endIconButton}  color="inherit" aria-label="courses"
                        onClick={() => {dispatch(setMyUser([])); dispatch(resetCourseId()); dispatch(resetBulletinId()); history.push("/");}}>
                        <ExitToAppIcon fontSize="large"/>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Grow in>
                <Container className={classes.content}>
                    {myUser.authority === PROFESSOR ? 
                        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} justify="space-between">
                            <Grid item xs={12} sm={7}>
                                <CourseList/> 
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <CourseForm/> 
                            </Grid>
                            </Grid>
                        :
                        <Grid container direction="column" alignItems="center" justify="center" spacing={3}>
                            <Grid  item xs={12} sm={7}>
                                <CourseList/> 
                            </Grid>
                        </Grid>
                    }
                        
                    
                </Container>
            </Grow>
        </Container>
    );
};

export default CoursePage;