import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'

import { useSelector } from 'react-redux';

import Bulletin from './Bulletin/Bulletin';
import useStyles from './style';

const BulletinList = () => {

    const currentCourseId = useSelector((state) => state.currentCourse._id);
    const currentCourse = useSelector ((state) => currentCourseId? state.courses.find((c) => c._id === currentCourseId) : null);

    const Bulletins = currentCourse.bulletins;
    const classes = useStyles();

    let announceBulletins = Bulletins.filter(bulletin => bulletin.announce);
    let notAnnounceBulletins = Bulletins.filter(bulletin => !bulletin.announce);

    announceBulletins.sort((a, b) => (a.updatedAt > b.updatedAt) ? -1 : 1)
    notAnnounceBulletins.sort((a, b) => (a.updatedAt > b.updatedAt) ? -1 : 1)



    return (
        !Bulletins.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {announceBulletins.map((bulletin) => (
                    <Grid key={bulletin.Id} item xs={12} sm={12}>
                        <Bulletin bulletin={bulletin}/>
                    </Grid>
                ))}

                {notAnnounceBulletins.map((bulletin) => (
                    <Grid key={bulletin.Id} item xs={12} sm={12}>
                        <Bulletin bulletin={bulletin}/>
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}

export default BulletinList;