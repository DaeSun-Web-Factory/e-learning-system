import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'

import { useSelector } from 'react-redux';

import Course from './Bulletin/Bulletin';
import useStyles from './style';

const CourseList = () => {

    const currentCourseId = useSelector((state) => state.currentCourse._id);
    const currentCourse = useSelector ((state) => currentCourseId? state.courses.find((c) => c._id === currentCourseId) : null);

    const Bulletins = currentCourse.bulletins;
    const classes = useStyles();


    return (
        !Bulletins.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {Bulletins.map((course) => (
                    <Grid key={course._id} item xs={12} sm={12}>
                        <Course course={course}/>
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}

export default CourseList;