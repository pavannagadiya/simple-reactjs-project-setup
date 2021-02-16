import React, { Component } from "react";
import { Layout } from "antd";

export default class Index extends Component {
  render() {
    const { Footer } = Layout;
    return (
      <Footer className="w-100 text-center p-3"
        style={{
          position: "fixed",
          bottom: "0",
          // width: "100%",
        }}
      >
        Pavan Design ©2021 Created by Pavan
      </Footer>
    );
  }
}
