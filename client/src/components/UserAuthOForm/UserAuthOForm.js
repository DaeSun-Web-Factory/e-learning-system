import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './style';
import crypto from 'crypto';

import { Link, useHistory } from 'react-router-dom';


const UserAuthOForm = () => {
    const myUser = useSelector((state) => state.myUser);

    const history = useHistory();

    const [userData, setUserData] = useState({
        password: ''
    });

    const classes = useStyles();

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const secret = process.env.REACT_APP_PASSWORD_SECRET_KEY;

        const hashedPassword = crypto.createHmac('sha256', secret).update(userData.password).digest('hex');

        if (hashedPassword === myUser.password){
            history.push("/useredit");
        }
        else{
            alert('비밀번호가 일치하지 않습니다.');
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
                    disabled
                    value={myUser.userId}
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
                    인증 완료
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

export default UserAuthOForm;