import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Descriptions, Calendar, Select , Modal } from "antd";
import Slot from './slot';
import { useDispatch , useSelector } from "react-redux";
import { selectViewDate, selectViewSlots, setViewSlots } from "../../features/userSlice";
import Data from '../../data/data.json';


const Doctorinfo = () => {
  //  constructor(props){
  //      super(props);
  //      this.state = {
  //         viewSlot: false
  //       };
  //  }

  console.log(Data);

  const [mData,setMdata] = useState();
 
  const { Option } = Select;
  const { Content } = Layout;

  const dispatch = useDispatch();

  const isViewSlot = useSelector(selectViewSlots);
  const isViewDate = useSelector(selectViewDate);
  const viewSlotHandler = () => {
    // this.setState({
    //     viewSlot:true
    // })

    dispatch(setViewSlots(true));
  };

  return (
    <div>
      {isViewDate ? Data.map((d,id)=>{
        if(id==0){
          return (
            <>
            
            <Content style={{ padding: "0 50px" }}>
            <Descriptions title="Doctor Details">
              <Descriptions.Item label="Name">{d.name}</Descriptions.Item>
              <Descriptions.Item label="Organization's Name">
                {d.org}
              </Descriptions.Item>
              <Descriptions.Item label="Availability">{`Sunday=> ${d.availibility.sun} || Wednesday ${d.availibility.wed}`}</Descriptions.Item>
            </Descriptions>
            <h1>Available Date</h1>
            <Calendar onSelect={viewSlotHandler} />
          </Content>
          </>
          )
        }
      }):""}
      {isViewSlot ? <Slot/> : ""}
    </div>
  );
}
export default Doctorinfo;
