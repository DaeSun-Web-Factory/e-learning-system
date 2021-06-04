import React from 'react';
import { useSelector } from 'react-redux';

import Course from './Course/Course';
import useStyles from './style';

const CourseList = () => {
    const courses = useSelector((state) => state.courses);

    const classes = useStyles();

    return (
        <div>
            <h1>CourseList</h1>
            <Course/>
            <Course/>
        </div>
        
    );
}

export default CourseList;