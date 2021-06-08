import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'

import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './style';

const CourseList = () => {
    const allCourses = useSelector((state) => state.courses);
    const myUser = useSelector((state) => state.myUser);

    let courses = allCourses.filter(course => course.professor === myUser.name);
    courses.sort((a, b) => (a.updatedAt > b.updatedAt) ? -1 : 1);

    const classes = useStyles();

    return (
        !courses.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {courses.map((course) => (
                    <Grid key={course._id} item xs={12} sm={6}>
                        <Course course={course}/>
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}

export default CourseList;