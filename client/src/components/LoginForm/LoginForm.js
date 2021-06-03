import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setMyUser } from '../../actions/myUser';

import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './style';

import crypto from 'crypto';

import { Link, useHistory } from 'react-router-dom';



const LoginForm = () => {
    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const history = useHistory();

    const [userData, setUserData] = useState({
        userId: '', password: ''
    });

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginUserData = users.find(user => user.userId === userData.userId);

        
        const secret = process.env.REACT_APP_PASSWORD_SECRET_KEY;

        const hashedPassword = crypto.createHmac('sha256', secret).update(userData.password).digest('hex');


        if (loginUserData){
            if (loginUserData.password === hashedPassword){
                dispatch(setMyUser(loginUserData));
                history.push("/userprofile");
            }
    
            else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        }
        else{
            alert('존재하지 않는 ID입니다. 회원가입을 먼저 해주세요');
        }
        
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
                    value={userData.userId}
                    onChange={(e) => setUserData({...userData, userId: e.target.value})}
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

                
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    Sign In
                </Button>


                <Link className={`${classes.buttonSubmit} ${classes.loginLink}`} to="/register">

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size="small" 
                        fullWidth
                    >
                        회원가입
                        
                    </Button>
                    
                </Link>
            </form>
        </Paper>
    );
};

export default LoginForm;