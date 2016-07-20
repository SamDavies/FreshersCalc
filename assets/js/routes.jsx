import React from 'react'
import { Route, IndexRoute } from 'react-router'

// containers
var Root = require('./containers/Root');
var App = require('./containers/App');
import GradePage from './Grade/containers/GradePage'

// My Imports
var RegisterPage = require('./register');
var LoginPage = require('./login');
var AboutPage = require('./about');
var PaperPage = require('./paper');
var LogoutPage = require('./logout');
var CourseDetail = require('./CourseDetail');
var CreatePaper = require('./CreatePaper');
var auth = require('./auth');

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/web/login/',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={GradePage} onEnter={requireAuth}/>
        <Route path="web/login/" component={LoginPage}/>
        <Route path="web/logout/" component={LogoutPage}/>
        <Route path="web/register/" component={RegisterPage}/>
        <Route path="web/about/" component={AboutPage}/>
        <Route path="web/course/:courseId/paper/create/" component={CreatePaper} onEnter={requireAuth}/>
        <Route path="web/course/:courseId/paper/" component={CourseDetail} onEnter={requireAuth}/>
        <Route path="web/paper/" component={PaperPage} onEnter={requireAuth}/>
        <Route path="web/dashboard/" component={GradePage} onEnter={requireAuth}/>
    </Route>
)
