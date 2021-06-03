import React from 'react';

import { Route } from 'react-router-dom';

import Login from './pages/Login/login.js';
import Register from './pages/Register/register.js';
import UserInfo from './pages/UserInfo/UserInfo.js';
import UserAuthO from './pages/UserAuthO/UserAuthO.js';
import UserEdit from './pages/UserEdit/UserEdit.js';

const App = () => {
    return (
        <div>
            <Route path="/" component={Login} exact/>
            <Route path="/register" component={Register} />
            <Route path="/userprofile" component={UserInfo} />
            <Route path="/userautho" component={UserAuthO} />
            <Route path="/useredit" component={UserEdit} />

        </div>
    )
}

export default App;