import React from 'react';

//constants
import { NOTICE, ASSIGNMENT } from '../../../../constants/bulletinType';

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

    return (
        <Card className={classes.card} >
            <div className={classes.detailsBottom}>
                <Typography variant="h6"> {`[${titleExplanation}] ${bulletin.title}`}</Typography>
            </div>

            {bulletin.content!==undefined ? 
                bulletin.content.includes('\n') ? 
                    bulletin.content.split('\n').map((sentence, index) => (
                        <div key={index} className={classes.details}>
                            <Typography variant="body2" color="textSecondary"> {`${sentence}`}</Typography>
                        </div>
                    ))
                    :
                    <div className={classes.details}>
                        <Typography variant="body2" color="textSecondary"> {`${bulletin.content}`}</Typography>
                    </div>

                :
                null
            }

            <div className={classes.detailsTop}>
                <Typography display="inline" align="right" variant="body2" color="textSecondary"> 최근 업데이트: {moment(bulletin.updatedAt).fromNow()} </Typography>
            </div>
        </Card>
    );
}

export default LastActivity;