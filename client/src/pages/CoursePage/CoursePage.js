import React, {useEffect} from 'react';

// redux
import {useDispatch} from 'react-redux';
import { getCourses } from '../../actions/courses'

// route
import { useHistory } from 'react-router-dom';

//front UI
import {Container, AppBar, Typography, Grow, Grid, Toolbar} from '@material-ui/core';
import CourseForm from '../../components/Courses/CourseForm/CourseForm';
import CourseList from '../../components/Courses/CourseList/CourseList';
import useStyles from './style';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const CoursePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]); 

    return (
        <Container maxidth="lg">
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
                        Course Menu
                    </Typography>

                    <IconButton edge="end" color="inherit" aria-label="profile"
                        onClick={() => {history.push("/userprofile");}}>
                        <AccountCircleIcon fontSize="large"/>
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Grow in>
                <Container className={classes.content}>
                    <Grid container alignItems="stretch" spacing={3} justify="space-between">
                        <Grid item xs={12} sm={7}>
                            <CourseList/> 
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <CourseForm/> 
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default CoursePage;