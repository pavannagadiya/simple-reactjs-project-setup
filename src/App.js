import React, { Component } from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import Contact from "./screens/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
