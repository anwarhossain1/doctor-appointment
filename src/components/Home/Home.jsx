import React, { useState } from "react";
import { Layout, Menu, Card, Button, Row, Col, List } from "antd";
import "antd/dist/antd.css";
import Data from "../../data/data.json";
import Doctorinfo from "../DoctorInfo/Doctorinfo";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCount } from "../../features/userSlice";
function Home() {
  const [title, setTitle] = useState([]);
  const { Header, Content, Footer } = Layout;
  const { Meta } = Card;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log("okay");
    
    // <Doctorinfo props={Data}/>
  };

  const countHandler = () =>{
    // dispatch(setCount());

  }


  return (
    <div>
      <Layout>
        <Row>
          <Col>
         
        <Content style={{ padding: "0 50px" }}>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 5,
            }}
            dataSource={Data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  key={item.id}
                  hoverable
                  style={{ maxWidth: 500, maxMargin: "50px" }}
                  cover={
                    <img
                      alt="example"
                      src="https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                    />
                  }
                >
                  <Meta title={item.name} description={item.org} />

                  <Link to='/doctorinfo' onClick={onClickHandler} details={Data}>
                    
                  <Button
                      type="primary"
                      style={{ position: "center" }}
                      onClick={countHandler}
                      
                    >
                      Set Appointment
                    </Button>
                  </Link>
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
            )}
          />
        </Content>
        </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default Home;
