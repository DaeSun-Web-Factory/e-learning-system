import React from 'react';

//constants
import { WINTER_SESSIONS, SPRING_SEMESTER, SUMMER_SESSIONS, FALL_SEMESTER } from '../../../../constants/semesterType'

// UI
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import moment from 'moment';
import useStyles from './style';

//images
import defaultImage from '../../../../images/default.gif';
import bussinessImage from '../../../../images/bussiness.jpeg';
import literalImage from '../../../../images/liberalArts.jpeg';
import bioImage from '../../../../images/lifeScience.jpeg';
import poliEcoImage from '../../../../images/politicsEconomics.jpeg';
import scienceImage from '../../../../images/science.jpeg';
import engieenImage from '../../../../images/lifeScience.jpeg';
import doctorImage from '../../../../images/medicine.jpeg';
import teacherImage from '../../../../images/teacher.jpeg';
import nurseImage from '../../../../images/nurse.jpeg';
import infomationImage from '../../../../images/infomation.jpeg';
import designImage from '../../../../images/design.jpeg';
import internationalImage from '../../../../images/international.jpeg';
import mediaImage from '../../../../images/media.jpeg';
import healthScienceImage from '../../../../images/healthScience.jpeg';
import dititalDefenseImage from '../../../../images/dititalDefense.jpeg';
import psyImage from '../../../../images/psy.png';

/*
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottm> {`${course.courseNumber}:${course.courseName}`} </Typography>
            </CardContent>
*/

const Course = ({ course }) => {
    const classes = useStyles();

    const courseUniv = course.courseNumber.slice(-7, -3)

    let thumbnail = defaultImage;

    switch (courseUniv){
        case "BUSS":
            thumbnail = bussinessImage;
            break;

        case "KORE":
        case "ENGL":
        case "PHIL":
        case "HOKA":
        case "SOCI":
        case "STSR":
        case "GERM":
        case "FRAN":
        case "CHIN":
        case "RUSS":
        case "JAPN":
        case "HOEW":
        case "SPAN":
        case "HANM":
        case "LING":
        case "LALW":
        case "MHUM":
        case "EMLA":
        case "HMCI":
        case "GLEA":
        case "LBNC":
        case "UNIP":
            thumbnail = literalImage;
            break;
        
        case "LIBS":
        case "LIBT":
        case "LIET":
        case "LESE":
        case "LESF":
        case "LIST":
        case "CCST":
        case "LIFS":
        case "PMP":
            thumbnail = bioImage;
            break;

        case "POLI":
        case "ECON":
        case "STAT":
        case "PAPP":
        case "FNEG":
            thumbnail = poliEcoImage;
            break;


        case "MATH":
        case "PHYS":
        case "CHEM":
        case "EAES":
            thumbnail = scienceImage;
            break;

        case "EGRN":
        case "KECE":
        case "CHBE":
        case "AMSE":
        case "IMEN":
        case "MECH":
        case "ARCH":
        case "ACEE":
        case "TEEN":
            thumbnail = engieenImage;
            break;

        case "PMED":
        case "MEDI":
            thumbnail = doctorImage;
            break;

        case "EDUC":
        case "PHEK":
        case "HEED":
        case "MATE":
        case "KLLE":
        case "ELED":
        case "GEOG":
        case "HISE":
        case "FADM":
        case "MUKE":
            thumbnail = teacherImage;
            break;

        case "NRSG":
            thumbnail = nurseImage;
            break;

        case "BNCS":
        case "COSE":
        case "STEP":
        case "ISEC":
            thumbnail = infomationImage;
            break;

        case "ARDE":
            thumbnail = designImage;
            break;

        case "DISS":
        case "GLKS":
            thumbnail = internationalImage;
            break;

        case "JMCO":
            thumbnail = mediaImage;
            break;

        case "KHRS":
        case "KHPH":
        case "BMED":
        case "BSMS":
        case "KHES":
        case "KHPM":
            thumbnail = healthScienceImage;
            break;

        case "CYDF":
            thumbnail = dititalDefenseImage;
            break;
        
        case "PSYC":
            thumbnail = psyImage;
            break;

        default:
            thumbnail = defaultImage;
            break;
    }

    let semesterString = "";
    switch (course.semester) {
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
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={thumbnail} title={course.courseName}> </CardMedia>

            <div className={classes.overlay}>
                <Typography variant="h6"> {`${course.courseName}`}</Typography>
                <Typography variant="body2"> {`${course.courseNumber} : ${course.classNumber}분반`} </Typography>
                <Typography variant="body2"> {`${course.professor} 교수님`} </Typography>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary"> {`${course.year}년 ${semesterString}`} </Typography>
                <Typography variant="body2" color="textSecondary"> 최근 업데이트: {moment(course.updatedAt).fromNow()} </Typography>
            </div>


            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <EditIcon fontSize="small" />
                    Edit
                </Button>

                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteOutlineIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Course;