import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./containers/App";
import BudgetPage from "./Calculator/containers/BudgetPage";
import ExpensesPage from "./Calculator/containers/ExpensesPage";
import GoingOutPage from "./Calculator/containers/GoingOutPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BudgetPage}/>
        <Route path="web/budget/" component={BudgetPage}/>
        <Route path="web/expenses/" component={ExpensesPage}/>
        <Route path="web/going-out/" component={GoingOutPage}/>
    </Route>
)
