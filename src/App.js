import React from "react";
import HomePage from "./component/HomePage";
import SearchBox from "./component/SearchBox";
 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./action/index";
import Navigation from "./component/Navigation";
import skills from "./component/Skills";
 
 

const mapStateToProps = (state) => ({
  marketPlaceStandardData: state.marketPlaceStandardData,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/searchbox" component={SearchBox}></Route>
          <Route exact path="/skills" component={skills}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// my portfolio  structure