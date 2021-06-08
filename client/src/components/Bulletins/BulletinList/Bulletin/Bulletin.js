import React from 'react';


//redux
import { useSelector, useDispatch } from 'react-redux';
import { updateCourse } from '../../../../actions/courses';
import { setBulletinId } from '../../../../actions/currentBulletin'

//constants
import { NOTICE, ASSIGNMENT } from '../../../../constants/bulletinType';

// UI
import { Card, CardActions, Button, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import moment from 'moment';
import useStyles from './style';


const Bulletin = ({ bulletin }) => {
    // redux
    const dispatch = useDispatch();
    const currentCourseId = useSelector((state) => state.currentCourse._id);
    const currentCourse = useSelector ((state) => currentCourseId? state.courses.find((c) => c._id === currentCourseId) : null);

    // UI
    const classes = useStyles();

    const selectBulletin = () => {
        dispatch(setBulletinId(bulletin))
    }

    const deleteBulletin = () => {
        let newCourseData = Object.assign({}, currentCourse);
        const bulletinIndex = newCourseData.bulletins.indexOf(bulletin)
        if (bulletinIndex > -1) newCourseData.bulletins.splice(bulletinIndex, 1)

        dispatch(updateCourse(currentCourseId, newCourseData));
    }

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

    return (
        <Card className={classes.card} >
            <div className={classes.detailsBottom}>
                <Typography variant="h6"> {`[${titleExplanation}] ${bulletin.title}`}</Typography>
            </div>

            {bulletin.content.includes('\n') ? bulletin.content.split('\n').map((sentence) => (
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary"> {`${sentence}`}</Typography>
                    </div>
                ))
                :
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary"> {`${bulletin.content}`}</Typography>
                </div>
            }

            <div className={classes.detailsTop}>
                <Typography display="inline" align="right" variant="body2" color="textSecondary"> 최근 업데이트: {moment(bulletin.updatedAt).fromNow()} </Typography>
            </div>


            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {selectBulletin()}}>
                    <EditIcon fontSize="small" />
                    Edit
                </Button>

                <Button size="small" color="primary" onClick={() => {deleteBulletin()}}>
                    <DeleteOutlineIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Bulletin;