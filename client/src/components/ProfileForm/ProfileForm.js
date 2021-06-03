import React from 'react';

import { useSelector } from 'react-redux';

import { TextField, Button, Typography, Paper, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import useStyles from './style';

import { Link } from 'react-router-dom';


const ProfileForm = () => {
    const myUser = useSelector((state) => state.myUser);

    const classes = useStyles();

    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6"> Your Profile Info </Typography>


                <TextField 
                    name="userId" 
                    variant="outlined" 
                    label="ID" 
                    fullWidth
                    disabled
                    value={myUser.userId}
                />

                <TextField 
                    name="name" 
                    variant="outlined" 
                    label="User Name" 
                    fullWidth
                    disabled
                    value={myUser.name}
                />

                <TextField 
                    name="userNumber" 
                    variant="outlined" 
                    label="학번/교번" 
                    fullWidth
                    disabled
                    value={myUser.userNumber}
                />

                <RadioGroup row aria-label="권한" name="authority1" value={myUser.authority} disabled>
                    <FormControlLabel value="학생" control={<Radio />} label="학생" />
                    <FormControlLabel value="교수" control={<Radio />} label="교수" />
                </RadioGroup>

                <TextField 
                    name="email" 
                    variant="outlined" 
                    label="Email" 
                    fullWidth
                    disabled
                    value={myUser.email}
                />

                <Link className={`${classes.buttonSubmit} ${classes.loginLink}`} to="/userautho">

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        fullWidth
                    >
                        회원 정보 변경
                        
                    </Button>

                </Link>
            </form>
        </Paper>
    );
};

export default ProfileForm;