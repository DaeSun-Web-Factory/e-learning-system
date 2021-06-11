import React from 'react';

//constants
import { STUDENT, PROFESSOR } from '../../../constants/authorityType';

//redux
import { useSelector } from 'react-redux';

//UI Component
import { Grid, CircularProgress } from '@material-ui/core'
import LastActivity from './LastActivity/LastActivity';
import useStyles from './style';

const LastActivityList = () => {
    const allCourses = useSelector((state) => state.courses);
    const myUser = useSelector((state) => state.myUser);

    let courses = []
    
    if (myUser.authority === PROFESSOR){
        courses = allCourses.filter(course => course.professor === myUser.name);
    }

    else if (myUser.authority === STUDENT){
        courses = allCourses.filter(course => course.students.includes(myUser.userId));
    }

    let bulletins = []

    for (let courseIndex=0; courseIndex < courses.length; courseIndex++){
        const currentCourse = courses[courseIndex];
        for (let bulletinIndex=0; bulletinIndex < currentCourse.bulletins.length; bulletinIndex++){
            const richBulletin = Object.assign(currentCourse.bulletins[bulletinIndex], {course:currentCourse})
            bulletins = bulletins.concat(richBulletin)
        }
    }
    

    let announceBulletins = bulletins.filter(bulletin => bulletin.announce);
    let notAnnounceBulletins = bulletins.filter(bulletin => !bulletin.announce);

    announceBulletins.sort((a, b) => (a.updatedAt > b.updatedAt) ? -1 : 1)
    notAnnounceBulletins.sort((a, b) => (a.updatedAt > b.updatedAt) ? -1 : 1)


    const classes = useStyles();
    return (
        !bulletins.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {announceBulletins.length ? 
                    announceBulletins.map((bulletin, index) => (
                        <Grid key={index} item xs={12} sm={12}>
                            <LastActivity  bulletin={bulletin}/>
                        </Grid>
                    ))
                    :
                    null
                }

                {
                notAnnounceBulletins.length ? 
                    notAnnounceBulletins.map((bulletin, index) => (
                        <Grid key={index} item xs={12} sm={12}>
                            <LastActivity bulletin={bulletin}/>
                        </Grid>
                    ))
                    :
                    null
                }

            </Grid>
        )
        
    );
}

export default LastActivityList;