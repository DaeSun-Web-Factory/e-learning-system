import React from 'react';


//constants
import { STUDENT, PROFESSOR } from '../../../constants/authorityType';


//front components
import { Grid, CircularProgress } from '@material-ui/core'
import Course from './Course/Course';
import useStyles from './style';

//redux
import { useSelector } from 'react-redux';



const CourseList = () => {
    const allCourses = useSelector((state) => state.courses);
    const myUser = useSelector((state) => state.myUser);

    let courses = []
    
    if (myUser.authority === PROFESSOR){
        courses = allCourses.filter(course => course.professor === myUser.name);
    }

    else if (myUser.authority === STUDENT){
        courses = allCourses.filter(course => course.students.includes(myUser.userId));
    }
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