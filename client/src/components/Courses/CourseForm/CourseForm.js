import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { createCourse } from '../../../actions/courses';

import { TextField, Button, Typography, Paper, RadioGroup, FormControlLabel, Radio,
    List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';


import { WINTER_SESSIONS, SPRING_SEMESTER, SUMMER_SESSIONS, FALL_SEMESTER } from '../../../constants/semesterType'

import useStyles from './style';

import { STUDENT } from '../../../constants/authorityType';


const CourseForm = () => {
    const users = useSelector((state) => state.users);
    const myUser = useSelector((state) => state.myUser);
    const dispatch = useDispatch();

    const students = users.filter(user => user.authority === STUDENT);
    const studentIndeces = [...Array(students.length).keys()]

    const [courseData, setCourseData] = useState({
        courseName: '', courseNumber: '', classNumber: '', year: '', semester: ''
    });

    const [checkedStudentIndeces, setCheckedStudentIndeces] = useState([]);

    const classes = useStyles();


    const handleToggle = (value) => () => {
        const currentIndex = checkedStudentIndeces.indexOf(value);
        const newChecked = [...checkedStudentIndeces];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } 
        else {
            newChecked.splice(currentIndex, 1);
        }
    
        setCheckedStudentIndeces(newChecked);

    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedStudents = students.filter( (student, index, array) => {
            return studentIndeces.includes(index);
        });

        const selectedStudentsIds = selectedStudents.map(selectedStudent => selectedStudent.userId);

        const newCourseData = Object.assign(courseData, {professor: myUser.name, students: selectedStudentsIds,  bulletins: [], createdAt: Date.now(), updatedAt: Date.now()});

        console.log(selectedStudentsIds)

        dispatch(createCourse(newCourseData));
    }



    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Type Your Info </Typography>


                <TextField 
                    name="courseName" 
                    variant="outlined" 
                    label="과목명" 
                    fullWidth
                    value={courseData.courseName}
                    onChange={(e) => setCourseData({...courseData, courseName: e.target.value})}
                />

                <TextField 
                    name="courseNumber" 
                    variant="outlined" 
                    label="학수번호" 
                    fullWidth
                    value={courseData.courseNumber}
                    onChange={(e) => setCourseData({...courseData, courseNumber: e.target.value})}
                />

                <TextField 
                    name="classNumber" 
                    variant="outlined" 
                    label="분반" 
                    fullWidth
                    value={courseData.classNumber}
                    onChange={(e) => setCourseData({...courseData, classNumber: e.target.value})}
                />

                <TextField 
                    name="year" 
                    variant="outlined" 
                    label="개설년도" 
                    fullWidth
                    value={courseData.year}
                    onChange={(e) => setCourseData({...courseData, year: e.target.value})}
                />

                <RadioGroup row aria-label="학기" name="학기" value={courseData.semester} onChange={(e) => setCourseData({...courseData, semester: e.target.value})}>
                    <FormControlLabel value={WINTER_SESSIONS} control={<Radio />} label="계절학기-겨울" />
                    <FormControlLabel value={SPRING_SEMESTER} control={<Radio />} label="1학기" />
                    <FormControlLabel value={SUMMER_SESSIONS} control={<Radio />} label="계절학기-여름" />
                    <FormControlLabel value={FALL_SEMESTER} control={<Radio />} label="2학기" />
                </RadioGroup>

                    <List className={classes.list}>
                        {studentIndeces.map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                                <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checkedStudentIndeces.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                </ListItemIcon>

                                <ListItemText id={labelId} primary={`${students[value].name} : ${students[value].userNumber}`} />

                            </ListItem>
                            );
                        })}
                    </List>


                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    과목 개설
                </Button>

            </form>
        </Paper>
    );
};

export default CourseForm;