import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Main from "../screens/Main";
import Expenses from "../screens/Expenses";
import ExpenseAdd from "../screens/ExpenseAdd";

const App = () => {
  return (
    <Router>
      <div
        className="ui container teal inverted segment"
        style={{ height: "100%" }}
      >
        <div className="ui grid" style={{ height: "100%" }}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/list" component={Expenses} />
            <Route path="/add" component={ExpenseAdd} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
