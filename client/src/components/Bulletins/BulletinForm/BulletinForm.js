import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { updateCourse } from '../../../actions/courses';
import { resetBulletinId } from '../../../actions/currentBulletin';

//UI Components
import { TextField, Button, Typography, Paper, RadioGroup, FormControlLabel, Radio, Checkbox } from '@material-ui/core';
import { NOTICE, ASSIGNMENT } from '../../../constants/bulletinType'
import useStyles from './style';

//Quill
import ReactQuill from 'react-quill';
import "../../../../node_modules/react-quill/dist/quill.snow.css";

const BulletinForm = () => {
    const currentCourseId = useSelector((state) => state.currentCourse._id);
    const currentCourse = useSelector ((state) => currentCourseId? state.courses.find((c) => c._id === currentCourseId) : null);

    const currentBuelltinId = useSelector((state) => state.currentBulletin.Id);
    let currentBulletin =  useSelector ((state) => currentBuelltinId? state.courses.find((c) => c._id === currentCourseId).bulletins.find((b) => b.Id === currentBuelltinId) : null);

    const dispatch = useDispatch();

    const [bulletinData, setBulletinData] = useState({
        title: '', announce: false, type: '', content: '', fileContents: []
    });

    const classes = useStyles();


    useEffect(() => {
        if(currentBulletin) {
            setBulletinData(currentBulletin)
        }
    }, [currentBulletin])

    const handleToggle = () => {
        if (bulletinData.announce) {
            setBulletinData({...bulletinData, announce: false});
        } 
        else {
            setBulletinData({...bulletinData, announce: true});
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //create
        if (!currentBuelltinId){

            const newBulletinData = Object.assign(bulletinData, {Id: uuidv4(), createdAt: Date.now(), updatedAt: Date.now()});
            let newCourseData = Object.assign({}, currentCourse);
    
            if (newBulletinData.announce){
                for (let bulletinIndex = 0; bulletinIndex < newCourseData.bulletins.length; bulletinIndex++){
                    newCourseData.bulletins[bulletinIndex].announce = false
                }
            }
            newCourseData.bulletins.push(newBulletinData)
            newCourseData.updatedAt = Date.now()
    
            const submitCourseData = Object.assign({}, newCourseData);
    
            dispatch(updateCourse(currentCourseId, submitCourseData));
        }

        //edit
        else {
            const updateBulletinData = Object.assign(bulletinData, {updatedAt: Date.now()});
            let newCourseData = Object.assign({}, currentCourse);
    
            if (updateBulletinData.announce){
                for (let bulletinIndex = 0; bulletinIndex < newCourseData.bulletins.length; bulletinIndex++){
                    newCourseData.bulletins[bulletinIndex].announce = false
                }
            }
            const targetBulletinIndex = newCourseData.bulletins.findIndex((bulletin) => bulletin.Id === updateBulletinData.Id)

            newCourseData.bulletins[targetBulletinIndex] = updateBulletinData
            newCourseData.updatedAt = Date.now()
    
            const submitCourseData = Object.assign({}, newCourseData);
    
            dispatch(updateCourse(currentCourseId, submitCourseData));
        }

        setBulletinData({title: '', announce: false, type: '', content: '', fileContents: []});
        dispatch(resetBulletinId())   

    }

    const clear = (e) => {
        e.preventDefault();

        setBulletinData({title: '', announce: false, type: '', content: '', fileContents: []});
        dispatch(resetBulletinId())   
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Type Post Info </Typography>


                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="제목" 
                    fullWidth
                    value={bulletinData.title}
                    onChange={(e) => setBulletinData({...bulletinData, title: e.target.value})}
                />

                <RadioGroup row aria-label="postType" name="postType" value={bulletinData.type} onChange={(e) => setBulletinData({...bulletinData, type: e.target.value})}>
                    <FormControlLabel value={NOTICE} control={<Radio />} label="안내사항" />
                    <FormControlLabel value={ASSIGNMENT} control={<Radio />} label="과제" />
                </RadioGroup>

                <FormControlLabel
                    control={
                    <Checkbox
                        checked={bulletinData.announce}
                        onChange={handleToggle}
                        name="announced"
                        color="primary"
                    />
                    }
                    label="공지사항"
                />


                <ReactQuill
                    className = {classes.contentText}
                    placeholder="내용" 
                    modules={BulletinForm.modules}
                    formats={BulletinForm.formats}
                    value={bulletinData.content} 
                    rowsMin={3} 
                    aria-label="minimum height" 
                    onChange={(e) => setBulletinData({...bulletinData, content: e})} 
                />

                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    {currentBuelltinId ? "게시물 수정" : "게시물 개설"}
                </Button>

                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    fullWidth
                    onClick={clear}
                    
                >
                    Reset
                        
                </Button>

            </form>
        </Paper>
    );
};

export default BulletinForm;