import React from 'react';

import { Route } from 'react-router-dom';

import Login from './pages/Login/login.js';
import Register from './pages/Register/register.js';
import UserInfo from './pages/UserInfo/UserInfo.js';
import UserAuthO from './pages/UserInfo/UserAuthO/UserAuthO.js';
import UserEdit from './pages/UserInfo/UserEdit/UserEdit.js';
import CoursePage from './pages/CoursePage/CoursePage.js';

const App = () => {
    return (
        <div>
            <Route path="/" component={Login} exact/>
            <Route path="/register" component={Register} />
            <Route path="/userprofile" component={UserInfo} />
            <Route path="/userautho" component={UserAuthO} />
            <Route path="/useredit" component={UserEdit} />
            <Route path="/course" component={CoursePage} />

        </div>
    )
}

export default App;