import React from 'react';

// route
import { useHistory } from 'react-router-dom';


//redux
import { useDispatch } from 'react-redux';
import { setCourseId } from '../../../../actions/currentCourse.js'
import { deleteCourse } from '../../../../actions/courses'

//constants

// UI
import { Card, CardActions, Button, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './style';





const Course = ({ course }) => {
    // route
    const history = useHistory();

    // redux
    const dispatch = useDispatch();

    // UI
    const classes = useStyles();



    const selectCourse = () => {
        dispatch(setCourseId(course))
    }

    return (
        <Card className={classes.card} >

            <div className={classes.overlay}>
                <Typography variant="h6"> {`${course.courseName}`}</Typography>
                <Typography variant="body2"> {`${course.courseNumber} : ${course.classNumber}분반`} </Typography>
                <Typography variant="body2"> {`${course.professor} 교수님`} </Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=>{dispatch(setCourseId(course)); history.push("/bulletin");}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>


            <div className={classes.detailsTop}>
                <Typography variant="body2" color="textSecondary"> {`${course.year}년 1학기`}</Typography>
            </div>

            <div className={classes.detailsBottom}>
                <Typography variant="body2" color="textSecondary"> 최근 업데이트: {moment(course.updatedAt).fromNow()} </Typography>
            </div>


            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {selectCourse()}}>
                    <EditIcon fontSize="small" />
                    Edit
                </Button>

                <Button size="small" color="primary" onClick={() => dispatch(deleteCourse(course._id))}>
                    <DeleteOutlineIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Course;