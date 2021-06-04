import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import { getCourses } from '../../actions/courses'

//front UI
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import CourseForm from '../../components/Courses/CourseForm/CourseForm';
import CourseList from '../../components/Courses/CourseList/CourseList';
import useStyles from './style';

const CoursePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    }, [dispatch]); 

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" aligh="center">Course Menu</Typography>
            </AppBar>

            <Grow in>
                <Container>
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