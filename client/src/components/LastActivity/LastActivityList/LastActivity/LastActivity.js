import React from 'react';

//constants
import { NOTICE, ASSIGNMENT } from '../../../../constants/bulletinType';
import { WINTER_SESSIONS, SPRING_SEMESTER, SUMMER_SESSIONS, FALL_SEMESTER } from '../../../../constants/semesterType'

// UI
import { Card, Typography } from '@material-ui/core';
import moment from 'moment';
import useStyles from './style';


const LastActivity = ({ bulletin }) => {
  
    // UI
    const classes = useStyles();

    //text
    let titleExplanation = "";
    if (bulletin.announce){
        titleExplanation = "공지사항";
    }
    else{
        switch (bulletin.type) {
            case NOTICE:
                titleExplanation = "안내사항";
                break;

            case ASSIGNMENT:
                titleExplanation = "과제";
                break;
        
            default:
                break;
        }
    }

    let semesterString = "";
    switch (bulletin.course.semester) {
        case WINTER_SESSIONS:
            semesterString = "겨울학기"
            break;

        case SPRING_SEMESTER:
            semesterString = "1학기"
            break;

        case SUMMER_SESSIONS:
            semesterString = "여름학기"
            break;

        case FALL_SEMESTER:
            semesterString = "2학기"
            break;
    
        default:
            break;
    }

    return (
        <Card className={classes.card} >
            <div className={classes.detailsBottom}>
                <Typography variant="h6"> {`[${titleExplanation}] ${bulletin.course.courseName} : ${bulletin.title}`}</Typography>
            </div>

            <div className={classes.details}>
                <div dangerouslySetInnerHTML={{__html: bulletin.content}} />
            </div>

            <div className={classes.detailsCourse}>
                <Typography display="inline" align="right" variant="body2" color="textSecondary"> {`과목정보: ${bulletin.course.courseNumber} - ${bulletin.course.classNumber}분반, ${bulletin.course.year}년 ${semesterString}, ${bulletin.course.professor} 교수님`}</Typography>
            </div>
            <div className={classes.detailsTop}>
                <Typography display="inline" align="right" variant="body2" color="textSecondary"> 최근 업데이트: {moment(bulletin.updatedAt).fromNow()} </Typography>
            </div>
            
            

        </Card>
    );
}

export default LastActivity;