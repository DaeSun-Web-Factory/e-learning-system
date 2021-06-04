import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TextField, Button, Typography, Paper, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import useStyles from './style';
import { updateUser } from '../../../actions/users';
import { setMyUser } from '../../../actions/myUser';

import crypto from 'crypto';

import { Link, useHistory } from 'react-router-dom';
import { STUDENT, PROFESSOR } from '../../../constants/authorityType';


const UserEditForm = () => {
    const myUser = useSelector((state) => state.myUser);
    const dispatch = useDispatch();

    const history = useHistory();

    const [userData, setUserData] = useState({
        userId: myUser.userId, password: '', passwordAgain: '', 
        name: myUser.name, userNumber: myUser.userNumber, 
        authority: myUser.authority, email: myUser.email
    });

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userData.password !== userData.passwordAgain){
            alert('비밀번호가 서로 일치하지 않습니다.');
            return;
        }
        
        const secret = process.env.REACT_APP_PASSWORD_SECRET_KEY;

        const hashedPassword = crypto.createHmac('sha256', secret).update(userData.password).digest('hex');

        const editedUserData = Object.assign(userData, {password: hashedPassword, updatedAt: Date.now()});

        const editedMyUserData = Object.assign(myUser, editedUserData);

        dispatch(updateUser(myUser._id, editedUserData));
        dispatch(setMyUser(editedMyUserData));

        
        history.push("/userprofile");
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> Type Your Info </Typography>
                

                <TextField 
                    name="userId" 
                    variant="outlined" 
                    label="ID" 
                    fullWidth
                    disabled
                    value={userData.userId}
                />

                <TextField 
                    name="password" 
                    variant="outlined" 
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    value={userData.password}
                    onChange={(e) => setUserData({...userData, password: e.target.value})}
                />

                <TextField 
                    name="passwordAgain" 
                    variant="outlined" 
                    label="Confirm Password" 
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    value={userData.passwordAgain}
                    onChange={(e) => setUserData({...userData, passwordAgain: e.target.value})}
                />

                <TextField 
                    name="name" 
                    variant="outlined" 
                    label="User Name" 
                    fullWidth
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                />

                <TextField 
                    name="userNumber" 
                    variant="outlined" 
                    label="학번/교번" 
                    fullWidth
                    value={userData.userNumber}
                    onChange={(e) => setUserData({...userData, userNumber: e.target.value})}
                />

                <RadioGroup row aria-label="권한" name="authority1" value={userData.authority} onChange={(e) => setUserData({...userData, authority: e.target.value})}>
                    <FormControlLabel value={STUDENT} control={<Radio />} label="학생" />
                    <FormControlLabel value={PROFESSOR} control={<Radio />} label="교수" />
                </RadioGroup>

                <TextField 
                    name="email" 
                    variant="outlined" 
                    label="Email" 
                    fullWidth
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                />

                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    정보 변경
                </Button>

                <Link className={`${classes.buttonSubmit} ${classes.loginLink}`} to="/userprofile">

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        fullWidth
                    >
                        프로필 화면으로
                        
                    </Button>
                    
                </Link>
            </form>
        </Paper>
    );
};

export default UserEditForm;