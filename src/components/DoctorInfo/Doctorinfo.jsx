import React, { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Descriptions, Calendar, Select , Modal, notification } from "antd";
import Slot from './slot';
import { useDispatch , useSelector } from "react-redux";
import { selectCount, selectViewDate, selectViewSlots, setViewSlots } from "../../features/userSlice";
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
  const [notificationn,setNotification]= useState(true);
 
  const { Option } = Select;
  const { Content } = Layout;


  const dispatch = useDispatch();

  const isViewSlot = useSelector(selectViewSlots);
  const isViewDate = useSelector(selectViewDate);
  // const isCount = useSelector(selectCount);
  // console.log(isCount)
  const viewSlotHandler = () => {
    // this.setState({
    //     viewSlot:true
    // })

    dispatch(setViewSlots(true));
  };

  const notifi= () =>{
    
  }
  

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
            <h2>Click on any date for setting Appointment</h2>
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
