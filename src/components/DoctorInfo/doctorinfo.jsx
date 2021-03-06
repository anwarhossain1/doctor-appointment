import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Descriptions, Calendar, Select , Modal } from "antd";
import Slot from './slot';

export default class doctorinfo extends Component {
 constructor(props){
     super(props);
     this.state = {
        viewSlot: false
      };
 }
 hh=() => {
    this.setState({
        viewSlot:true
    })
}
  render() {
    const { Option } = Select;
    const { Content } = Layout;

    return (
      <div>
        <Content style={{ padding: "0 50px" }}>
          <Descriptions title="Doctor Details">
            <Descriptions.Item label="Name">Anwar Hossain</Descriptions.Item>
            <Descriptions.Item label="Expertise In">
              Neurologist
            </Descriptions.Item>
          </Descriptions>
          <h1>Available Date</h1>
          <Calendar onSelect={this.hh} />
        </Content>
        {this.state.viewSlot?<Slot ss={this.state.viewSlot}/> : ""}
      </div>
    );
  }
}
