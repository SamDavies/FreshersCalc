import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./containers/App";
import BudgetPage from "./Calculator/containers/BudgetPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BudgetPage}/>
        <Route path="web/budget/" component={BudgetPage}/>
    </Route>
)
