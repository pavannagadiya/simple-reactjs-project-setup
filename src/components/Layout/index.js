import React, { Component } from "react";
import { Layout } from "antd";
import Header from "../Header";
import Footer from "../Footer";

export default class index extends Component {
  render() {
    const { Content } = Layout;
    return (
      <>
        <Header />
        <Content style={{ padding: "0 50px" }}>{this.props.children}</Content>
        <Footer style={{height:'calc(-51vh)'}}/>
      </>
    );
  }
}
