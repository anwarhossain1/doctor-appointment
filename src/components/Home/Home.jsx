import React, { useState } from "react";
import { Layout, Menu, Card, Button, Row, Col , List } from "antd";
import "antd/dist/antd.css";
import Data from "../../data/data.json";
import Doctorinfo from "../DoctorInfo/doctorinfo";

function Home() {
    const [title, setTitle] = useState([]);
  const { Header, Content, Footer} = Layout;
  const { Meta } = Card;

  const onClickHandler= () =>{
    console.log("okay");
    <Doctorinfo props={Data}/>

  }

     
        
  return (
    <div>
       
      <Layout>
        <Header>
          <div className="logo" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item>Doctor-Appointment</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <List
          grid={{
            gutter:16,
            xs:1,
            sm:2,
            md:2,
            lg:3,
            xl:5,
          }}
          dataSource={Data}
          renderItem={ item=>(
            <List.Item>
              <Card key= {item.id}
                hoverable
                style={{ width: 500, margin:"50px" }}
                cover={
                  <img
                    alt="example"
                    src="https://progod428.weebly.com/uploads/1/2/3/8/123809004/884238936.jpg"
                  />
                }
              >
                <Meta
                  title= {item.name}
                  description={item.org}
                />
               
                <Button style={{ position: "center" }} onClick={onClickHandler}>Set Appointment</Button>
              </Card>
               {/* {
                Data.map((data=>{
                  return(
                    <Card key= {data.id}
                hoverable
                style={{ width: 500, margin:"50px" }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title= {data.name}
                  description={data.org}
                />
               
                <Button style={{ position: "center" }}>Set Appointment</Button>
              </Card>
                  )
                }))

              } */}
            </List.Item>
          )

          }
          
          />
         
        </Content>
        <Footer>All rights reserved</Footer>
      </Layout>
    </div>
  );
}

export default Home;
